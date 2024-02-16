import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiCalculator } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
const sidenavData = [
  { name: "Home", navURL: "/", icon: <AiFillHome size={22} /> },
  { name: "Accounts", navURL: "/accounts", icon: <BiCalculator size={22} /> },
  { name: "Tasks", navURL: "/tasks", icon: <CiViewList size={22} /> },
  { name: "Users", navURL: "users", icon: <FaUser size={22} /> },
];

const MobileSidebar = () => {
  const location = useLocation();
  const pathname = "/" + location.pathname.split("/")[1];
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div
      className={`fixed z-[99] bottom-0 left-0 w-full h-[70px] ${
        theme === "dark" ? "bg-black" : "bg-white "
      } overflow-hidden flex justify-around items-center bg-shadeBlack border-t border-t-borderGray md:hidden `}
    >
      {sidenavData.map((item, ind) => (
        <NavLink
          to={item.navURL}
          key={ind}
          className={`flex flex-col gap-1 items-center ${
            item.navURL === pathname
              ? "text-[#4285f4]"
              : theme === "dark"
              ? "text-white"
              : "text-black"
          } `}
        >
          <div>{item.icon}</div>
          <p className="text-sm">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default MobileSidebar;
