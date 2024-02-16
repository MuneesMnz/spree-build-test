import React from "react";
import { useSelector } from "react-redux";

const DashboardHaeding = ({ title,margin }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <h4
      className={`text-xl font-medium max-md:m-5 ${margin? margin : "my-8"} ${
        theme === "dark" ? "text-white" : "text-black"
      } `}
    >
      {title}
    </h4>
  );
};

export default DashboardHaeding;
