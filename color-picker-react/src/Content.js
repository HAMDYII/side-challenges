import React from "react";

const Content = ({ backGroundColor }) => {
  return (
    <div style={{ backgroundColor: backGroundColor }} className="colorWindow">
      {!backGroundColor ? "Empty Value" : backGroundColor}
    </div>
  );
};

export default Content;
