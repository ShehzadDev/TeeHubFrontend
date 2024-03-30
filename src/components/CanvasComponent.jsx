import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, Html } from "@react-three/drei";
import { easing } from "maath";

function Model(props) {
  const { nodes, materials } = useGLTF("/src/assets/shirt_baked_collapsed.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow // Enable casting shadows
        receiveShadow // Enable receiving shadows
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

function Backdrop() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.z += 0.005;
  });

  // Convert Tailwind CSS color name to RGB
  const tailwindColorToRGB = (colorName) => {
    const colors = {
      "bg-blue-500": [59, 130, 246], // Example conversion for bg-blue-500
      // Add more color conversions as needed
    };
    return colors[colorName] || [255, 255, 255]; // Default to white if color is not found
  };

  // Get RGB values for the Tailwind CSS color
  const tailwindColorRGB = tailwindColorToRGB("bg-blue-500");
  const [r, g, b] = tailwindColorRGB;

  return (
    <mesh
      ref={meshRef}
      rotation={[0, 0, 0]}
      position={[0, 0, -3]}
      receiveShadow
    >
      {/* Enable receiving shadows */}
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial
        color={`rgb(${r}, ${g}, ${b})`}
        transparent
        opacity={0}
        receiveShadow // Enable receiving shadows
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
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        className="cursor-pointer"
        camera={{ position: [0, 0, 2.5], fov: 25 }}
        style={{ background: "#f0f0f0" }}
        shadows // Enable global shadows
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <pointLight position={[10, 10, 10]} castShadow />{" "}
        {/* Enable casting shadows */}
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
