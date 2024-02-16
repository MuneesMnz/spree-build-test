import React from "react";

import DashboardHaeding from "../../components/DashboardHaeding";
import { useSelector } from "react-redux";
import DashboardBanner from "../../components/DashboardBanner";
import MobileNavbar from "../../components/MobileNavbar";
import MobileSidebar from "../../components/MobileSidebar";
const homePageTileData = [
  { name: "Company Registration" },
  { name: "GST/TDS TCS Filing" },
  { name: "LLP Registration" },
  { name: "Income Tax Filing" },
  { name: "Partnership Registration" },
  { name: "EPF/ESI Filing" },
  { name: "NGO Registration" },
  { name: "Trademark Registration" },
  { name: "Proprietorship Registration" },
  { name: "Digital Signature" },
];

const Home = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="max-md:pb-[80px]">
      <MobileNavbar />
      <div className="max-md:p-5">
        <DashboardBanner />
        <DashboardHaeding title={"SERVICES"}  />
        <div className=" grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-5">
          {homePageTileData.map((item, ind) => (
            <div
            key={ind}
              className={`w-full  px-[25%] py-5 ${
                theme === "dark" ? "bg-darkPrimary " : "bg-lightPrimary"
              } rounded-[15px] h-[100px] flex justify-center items-center text-center`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <MobileSidebar />
    </div>
  );
};

export default Home;
