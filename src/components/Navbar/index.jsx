import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Badge } from "@mui/material";
import React from "react";
import { FaRegBell } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import Profile from "../../assets/Images/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const toggleMode = () => {
    dispatch(toggleTheme());
  };
  return (
    <div
      className={`w-full h-[70px] border-b ${
        theme === "dark" ? "border-b-borderGray" : "border-b-borderBlue"
      } flex justify-end gap-8 px-10  items-center max-md:hidden `}
    >
      <div className="relative">
        <FaRegBell size={30} />
        <div className="w-5 h-5 bg-specialBlue rounded-full text-white flex justify-center items-center absolute -top-1 -right-1 font-[300] text-sm">
          2
        </div>
      </div>
      <div className="w-[60px] rounded-full h-[32px] border border-[#ffffff1a] flex items-center">
        <img src={Profile} alt="profile" className="w-[30px]" />

        <BsChevronDown className="ml-1.5" />
      </div>
      <button onClick={() => toggleMode()}>click me</button>
    </div>
  );
};

export default Navbar;
