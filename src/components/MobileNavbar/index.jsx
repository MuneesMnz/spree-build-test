import React from "react";

import ProfileImg from "../../assets/Images/profile.png";
import { FaRegBell } from "react-icons/fa";
import { useSelector } from "react-redux";

const MobileNavbar = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="w-full h-[60px] md:hidden flex justify-between items-center px-5 border-b border-b-borderGray  ">
      <img
        src={ProfileImg}
        className="w-9 h-9 rounded-full object-cover"
        alt=""
      />
      <div className={`text-lg ${theme==="dark"?"text-lightPrimary":"text-darkSecondary"}`}>SPREE</div>
      <div className="relative">
        <FaRegBell size={30} />
        <div className="w-5 h-5 bg-specialBlue rounded-full text-white flex justify-center items-center absolute -top-1 -right-1 font-[300] text-sm">
          2
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
