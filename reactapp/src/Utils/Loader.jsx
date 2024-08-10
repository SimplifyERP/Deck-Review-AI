import React from "react";
import { Images } from "./Constants";
import "../App.css";

const Loader = () => {
  return (
    // <div className="loader-container ">
    //   <img src={Images.loaderview} alt="Loading..." className="loader" />
    // </div>

    // <div
    //   id="loading-overlay"
    //   // className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60 flex-col LoaderBg"
    //   className="fixed bg-red-500 w-full h-full flex items-center justify-center"
    // >
    //   <img src={Images.loaderview} alt="Loading..." className="loader" />

    //   <span className="text-white mt-1 font-OpenSauceSansSemiBold text-3xl font-bold">
    //     Loading...
    //   </span>
    // </div>

    <div className="fixed inset-0 flex   items-center justify-center bg-gray-900 bg-opacity-10 z-50">
      {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div> */}
      <img src={Images.loaderview} alt="Loading..." className="loader" />
    </div>
  );
};

export default Loader;
// src="https://example.com/loader.gif"
