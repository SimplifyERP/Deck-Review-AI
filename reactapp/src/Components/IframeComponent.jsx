import React from "react";

const IframeComponent = ({ url }) => {
  return (
    <div style={{ width: "100vh", height: "100vh", overflow: "hidden" }}>
      <iframe
        src={url}
        style={{
          width: "100vh",
          height: "100vh",
          border: "none",
          scrollBehavior: "none",
          overflow: "hidden",
          scrollbarWidth: "none" /* For Firefox */,
          msOverflowStyle: "none" /* For Internet Explorer and Edge */,
        }}
        title="Deck Review"
      />
    </div>
  );
};

export default IframeComponent;
