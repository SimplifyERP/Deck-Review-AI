// HorizontalListView.js
import React from "react";
import "./HorizontalListView.css";

const HorizontalListView = ({ items }) => {
  return (
    <div className="horizontal-list">
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default HorizontalListView;
