import React from "react";
import Heading from "./Heading";
const VideoPlayer = () => {
  return (
    <div className="container mx-auto">
      <div className="my-24">
        <Heading text="Tutorial: How to Design T-Shirt" />
      </div>
      <video
        className="sw-full rounded-lg mx-auto h-basic-video bg-gray-200 w-full"
        controls
      >
        <source
          src="https://docs.material-tailwind.com/demo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
