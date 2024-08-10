import React from "react";

const PrimaryButton = ({ label, onClick, onDisable }) => {
  return (
    <button
      className={`  text-white text-sm  lg:text-base py-2 px-4 rounded-full w-10/12 h-11 mx-auto font-OpenSauceSansRegular ${
        onDisable
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-gradient-to-r from-mGradientOne to-mGradientTwo"
      }`}
      onClick={onClick}
      disabled={onDisable}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
