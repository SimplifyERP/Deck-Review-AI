import React from "react";

const GreenButton = ({ label, onClick, onDisable, id, color }) => {
  return (
    <div className="w-full justify-center items-center flex">
      <button
        className={`text-white text-sm w-full  justify-center items-center text-center  h-10 lg:text-base py-2 px-6 flex rounded-full font-OpenSauceSansRegular ${
          onDisable
            ? "bg-gray-300 cursor-not-allowed"
            : color === "blue"
            ? "bg-mBlueOne"
            : color === "eventgreen"
            ? "bg-mS1Green"
            : "bg-mgradientThree"
        }`}
        onClick={onClick}
        disable={onDisable}
        key={id}
      >
        {label}
      </button>
    </div>
  );
};

export default GreenButton;
