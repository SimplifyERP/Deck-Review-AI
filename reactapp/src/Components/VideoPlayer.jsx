import React, { useRef, useState, useEffect } from "react";

import "../App.css";
import ReactPlayer from "react-player";

const VideoPlayer = ({ src, title }) => {
  //   const videoRef = useRef(null);
  //   const [isPlaying, setIsPlaying] = useState(false);

  //   const handlePlayPause = () => {
  //     if (videoRef.current.paused) {
  //       videoRef.current.play();
  //       setIsPlaying(true);
  //     } else {
  //       videoRef.current.pause();
  //       setIsPlaying(false);
  //     }
  //   };

  const time_range = document.querySelector(".time_range");
  //document.getElementById("v").currentTime = time_range.value;

  //   const handleForward = () => {
  //     videoRef.current.currentTime += 10;
  //   };

  //   const handleBackward = () => {
  //     videoRef.current.currentTime -= 10;
  //   };

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  ////////////////////////////////
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleForward = () => {
    videoRef.current.currentTime += 10;
  };

  const handleBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  //   const handleLoadedMetadata = () => {
  //     setDuration(videoRef.current.duration);
  //   };

  const handleProgressBarChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    videoRef.current.currentTime = newTime;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <div
        className="relative w-full h-0 VideoPlayer"
        style={{ paddingBottom: "56.25%" }}
      >
        {/* <video
          className="absolute top-0 left-0 w-full h-full rounded-lg "
          ref={videoRef}
          // Disable download button
          config={{ file: { attributes: { controlsList: "nodownload" } } }}
          // Disable right click
          onContextMenu={(e) => e.preventDefault()}
          controls="play Backward forward "
        >
          <source src={src} type="video/mp4" />
          <div className="h-10 w-10 bg-red-500"></div>
          Your browser does not support the video tag.
        </video> */}
        <ReactPlayer
          // Disable download button
          config={{
            file: { attributes: { controlsList: "nodownload" } },
          }}
          // Disable right click
          onContextMenu={(e) => e.preventDefault()}
          // Your props
          url="https://stage.startinsights.io./files/main.mp4"
          className="react-player rounded-lg"
          controls
          width="100%"
          height="100%"
        />
        {/* className="controls" */}
        <div className="controls w-full h-10 justify-center items-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
            onClick={handleBackward}
          >
            Backward 10s
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
          onClick={handleBackward}
        >
          Backward 10s
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
          onClick={handlePlayPause}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
          onClick={handleForward}
        >
          Forward 10s
        </button>
      </div>
    </div>

    // <div className="max-w-xl mx-auto p-4 relative">
    //   <video className="w-full" ref={videoRef}>
    //     <source src={src} type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
    //   <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50">
    //     <input
    //       type="range"
    //       className="w-full mb-2"
    //       min="0"
    //       max="100"
    //       value={(currentTime / duration) * 100 || 0}
    //       onChange={handleProgressBarChange}
    //     />
    //     <div className="flex justify-between text-white text-sm mb-2">
    //       <span>{formatTime(currentTime)}</span>
    //       <span>{formatTime(duration)}</span>
    //     </div>
    //     <div className="flex justify-center">
    //       <button
    //         className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
    //         onClick={handleBackward}
    //       >
    //         Backward 10s
    //       </button>
    //       <button
    //         className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
    //         onClick={handlePlayPause}
    //       >
    //         {isPlaying ? "Pause" : "Play"}
    //       </button>
    //       <button
    //         className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
    //         onClick={handleForward}
    //       >
    //         Forward 10s
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default VideoPlayer;
