import React from "react";

const ColorNameInput = ({ backGroundColor, setBackGroundColor }) => {
  const handleColorChange = (e) => {
    setBackGroundColor(e.target.value);
  };

  return (
    <form className="colorForm">
      <label htmlFor="colorName"></label>
      <input
        placeholder="Add color name"
        type="text"
        id="colorName"
        value={backGroundColor}
        onChange={handleColorChange}
      />
    </form>
  );
};

export default ColorNameInput;
