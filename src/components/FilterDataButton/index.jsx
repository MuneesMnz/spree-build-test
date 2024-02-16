import { X } from "@phosphor-icons/react";
import React from "react";
import { useSelector } from "react-redux";

const FilterDataButton = ({ value, handleClose }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div
      className={` px-1 py-2 min-w-[80px]  ${
        theme === "dark" ? "bg-darkSecondary" : "bg-[#7171711f] text-black"
      } rounded-md shadow-md  flex gap-2 justify-center items-center  whitespace-nowrap`}
    >
      <div className=" font-light  text-sm">{value}</div>
      <div onClick={handleClose} className="cursor-pointer">
        <X size={15} />
      </div>
    </div>
  );
};

export default FilterDataButton;
