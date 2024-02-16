import { AiFillHome } from "react-icons/ai";
import { BiCalculator } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  const theme = useSelector((state) => state.theme.theme);
  const sidenavData = [
    { name: "Home", navURL: "", icon: <AiFillHome size={28} /> },
    { name: "Accounts", navURL: "accounts", icon: <BiCalculator size={28} /> },
    { name: "Tasks", navURL: "tasks", icon: <CiViewList size={28} /> },
    { name: "Users", navURL: "users", icon: <FaUser size={28} /> },
  ];
  return (
    <div
      className={`flex-1 border-r ${
        theme === "dark" ? "border-r-borderGray" : "border-r-borderBlue"
      } h-screen sticky top-0 left-0 py-5  flex-col gap-[130px] hidden md:flex`}
    >
      <div className="text-center text-secondary   tracking-[10px] font-medium  text-2xl">
        SPREE
      </div>
      <div className="">
        {sidenavData.map((item, ind) => (
          <NavLink
            to={`${item.navURL}`}
            key={ind}
            className={` py-4 group hover:bg-gradient-to-r ${
              pathname === item.navURL
                ? "bg-gradient-to-r  from-[#605bff4d] border-r-specialBlue  border-r-[4px] "
                : "text-secondary  "
            } cursor-pointer px-10 flex gap-3 items-center`}
          >
            <div
              className={` ${
                pathname === item.navURL ? "text-specialBlue" : ""
              }`}
            >
              {item.icon}
            </div>
            <div
              className={` ${
                pathname === item.navURL ? "text-specialBlue" : ""
              }`}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
