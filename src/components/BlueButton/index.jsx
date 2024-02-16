import React from "react";

const BlueButton = ({ children, onClick }) => {
  return (
    <button
      className="text-white rounded-md bg-specialBlue px-5 py-1.5 font-light flex gap-2 items-center  "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BlueButton;
