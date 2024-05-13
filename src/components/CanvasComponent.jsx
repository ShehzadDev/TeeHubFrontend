import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import {
  useGLTF,
  Environment,
  Html,
  Text,
  OrbitControls,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "../state";

function Model(props) {
  const { nodes, materials } = useGLTF("/src/assets/shirt_baked_collapsed.glb");

  const snap = useSnapshot(state);

  const texture = useRef();

  // Load the image texture
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(snap.uploadedImageUrl, (loadedTexture) => {
    if (materials.lambert1) {
      materials.lambert1.map = loadedTexture;
      loadedTexture.wrapS = loadedTexture.wrapT = THREE.RepeatWrapping;
      loadedTexture.repeat.set(0.1, 0.1);
      loadedTexture.offset.set(0.5, 0.5);
      materials.lambert1.needsUpdate = true;
    }
  });

  useFrame((state, delta) => {
    if (materials.lambert1) {
      easing.dampC(materials.lambert1.color, snap.backgroundColor, 0.05, delta);
    } else {
      console.log("Materials or Lambert material not defined.");
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={0.5}
        {...props}
        dispose={null}
      />
    </group>
  );
}

function Backdrop() {
  const meshRef = useRef();

  useFrame((state) => {
    const mesh = meshRef.current;
    if (mesh && mesh.material) {
      mesh.material.color.set(state.selectColor);
    }
  });

  const tailwindColorToRGB = (colorName) => {
    const colors = {
      "bg-blue-500": [59, 130, 246],
    };
    return colors[colorName] || [255, 255, 255];
  };

  const tailwindColorRGB = tailwindColorToRGB("bg-blue-500");
  const [r, g, b] = tailwindColorRGB;

  return (
    <mesh
      ref={meshRef}
      rotation={[0, 0, 0]}
      position={[0, 0, -3]}
      receiveShadow
    >
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial
        color={`rgb(${r}, ${g}, ${b})`}
        transparent
        opacity={0}
        receiveShadow
      />
    </mesh>
  );
}

function CameraRig({ children }) {
  const group = useRef();
  const snap = {};
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [snap.intro ? -state.viewport.width / 4 : 0, 0, 2],
      0.25,
      delta
    );
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}

function CanvasComponent() {
  const snap = useSnapshot(state);
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        className="cursor-pointer"
        camera={{ position: [0, 0, 2.5], fov: 25 }}
        style={{ background: "#f0f0f0" }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <pointLight position={[10, 10, 10]} castShadow />

        {/* 3D Text */}
        <Text
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          color="black"
          scale={0.02}
          fontSize={0.5} // Adjust the font size as needed
          maxWidth={2}
          lineHeight={1}
          letterSpacing={0.02}
        >
          {snap.textDefault}
        </Text>

        <CameraRig>
          <Suspense fallback={<Html>Loading...</Html>}>
            <Model />
            <Backdrop />
          </Suspense>
        </CameraRig>
      </Canvas>
    </div>
  );
}

export default CanvasComponent;
