import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import MobileSidebar from "../../components/MobileSidebar";
import { useSelector } from "react-redux";

const Layout = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={`flex max-md:flex-col h-full relative  `}>
      <Sidebar />
      <div className="flex-[5]">
        <Navbar />
        <div className=" md:px-[40px] lg:px-[80px] md:py-10 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
