import React from "react";
import { useSelector } from "react-redux";

const MobileTableContainer = ({ data, title }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="lg:hidden">
      <div className="text-lg mb-5">{title}</div>
      {data.map((item, ind) => (
        <div
          key={ind}
          className={`w-full h-auto mb-5 p-3 md:p-5 rounded-lg border ${theme==="dark"?" border-borderGray":"border-borderLightGray"}  `}
        >
          <div className="flex justify-between items-center mb-2">
            <div>Arun Rajesh</div>
            <div>₹35000</div>
          </div>
          <div className="flex justify-between items-center text-lightSecondary font-light text-sm">
            <div>Order No:1234567890</div>
            <div>20 Jan 24 - 22 Jan 24</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileTableContainer;
