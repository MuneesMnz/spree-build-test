import React, { useEffect, useState } from "react";
import LineGraph from "../../components/LineGraph";
import Bin from "../../assets/icons/binIcon.png";
import DashboardHaeding from "../../components/DashboardHaeding";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import TileDropDown from "../../components/TileDropDown";
import { motion } from "framer-motion";
import { ChartBar, X } from "@phosphor-icons/react";
import MobileNavbar from "../../components/MobileNavbar";
import MobileSidebar from "../../components/MobileSidebar";

const Accounts = () => {
  const [graphType, setGraphType] = useState("Yearly");
  const theme = useSelector((state) => state.theme.theme);
  const [graphOpen, setGraphOpen] = useState(false);

  const data = [
    { name: "Sales" },
    {
      name: "Purchase",
      subcontent: [
        { name: "Purchase Order", url: "purchase-order" },
        { name: "Material Receipt", url: "material-receipt" },
        { name: "Purchase Invoice", url: "purchase-invoice" },
        { name: "Purchase Return", url: "purchase-return" },
      ],
    },
    { name: "Transaction" },
    { name: "Budget" },
    { name: "Financial Statement" },
    { name: "Report" },
    { name: "Payroll" },
    { name: "Services" },
  ];
  const nestVarients = {
    hidden: {
      x: "100vw",
      y: "-100px",
      display: "none",
      transition: {
        duration: 0,
      },
      transitionEnd: {},
    },
    visible: {
      x: 0,
      y: 0,
      display: "block",
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <div className="max-md:overflow-x-hidden ">
      <MobileNavbar />
      <div className=" max-md:p-5">
        <motion.div
          className="flex gap-5 max-md:flex-col "
          variants={nestVarients}
          initial="hidden"
          animate={graphOpen ? "visible" : "hidden"}
        >
          <div
            className={` ${
              theme === "dark"
                ? "bg-darkPrimary border-borderGray"
                : "bg-lightPrimary "
            } h-[350px] w-full rounded-[15px] p-1 md:p-5 border`}
          >
            <DashboardHaeding title={"Sales Report"} margin="my-3" />
            <div className="px-3 py-1 w-[100px] rounded-full border border-borderGray md:hidden flex justify-between items-center">
              <div>{graphType}</div>
              <BsChevronDown size={20} />
            </div>
            <div className="mt-5">Graph</div>
          </div>
        </motion.div>
        <DashboardHaeding title={"Tools"} />
        <div className=" grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-5 mb-[70px] max-md:mb-20">
          {data.map((tile, index) => (
            <div key={index}>
              <TileDropDown name={tile.name} subcontent={tile.subcontent} />
            </div>
          ))}
        </div>
        <div
          className={`absolute right-0 top-[150px] p-2 w-[100px] rounded-l-full border border-borderGray cursor-pointer  shadow-md  ${
            theme === "dark" ? " bg-darkPrimary" : "bg-lightPrimary"
          } flex gap-3 items-center `}
          onClick={() => setGraphOpen((prev) => !prev)}
        >
          {graphOpen ? (
            <>
              <X size={22} />
              <div className="text-sm font-light">Close</div>
            </>
          ) : (
            <>
              <ChartBar size={22} />
              <div className="text-sm font-light">Report</div>
            </>
          )}
        </div>
      </div>
      <MobileSidebar />
    </div>
  );
};

export default Accounts;
