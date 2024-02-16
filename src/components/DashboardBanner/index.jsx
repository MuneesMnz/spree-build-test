import React from "react";
import { useSelector } from "react-redux";
import FileImage from "../../assets/Images/fileGrapics.png";


const DashboardBanner = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div
      className={`w-full h-auto p-5 border ${
        theme === "dark"
          ? "border-borderGray bg-[#080808]"
          : "border-borderBlue bg-white"
      } rounded-[15px]  relative mb-10`}
    >
      <h4
        className={`text-xl  mb-2 ${
          theme === "dark" ? "text-white" : "text-black"
        } opacity-80`}
      >
        Welcome to SPREE!
      </h4>
      <p className="text-sm max-md:w-[250px]">
        We are here to help you with any legal needs
      </p>
      <div className="absolute right-5 max-md:right-2 top-5">
        <img src={FileImage} alt="home-page-grapics" className="w-[100px]" />
      </div>
    </div>
  );
};

export default DashboardBanner;
