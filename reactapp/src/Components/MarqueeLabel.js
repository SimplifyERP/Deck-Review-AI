import React from "react";
import "./MarqueeLabel.css";

const MarqueeLabel = ({ filename, fileExt }) => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {filename}.{fileExt}
      </div>
    </div>
  );
};

export default MarqueeLabel;
