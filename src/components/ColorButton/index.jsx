import React from "react";
import { useSelector } from "react-redux";

const ColorButton = ({ label, white, onClick }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <button
      className={`w-[100px] h-[40px] px-2 ${
        white
          ? theme === "dark"
            ? "text-black bg-white"
            : "text-white bg-specialBlue"
          : theme === "dark"
          ? "text-white bg-black border border-white   "
          : "text-black bg-white border border-black"
      } rounded-lg`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ColorButton;
