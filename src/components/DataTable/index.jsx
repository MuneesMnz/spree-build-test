import React from "react";
import { useSelector } from "react-redux";

const DataTable = ({ data, columns }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="w-full h-auto max-lg:hidden">
      <div className="flex gap-1 text-[13px] font-light px-5 py-2 ">
        {columns.map((item, ind) => (
          <div key={ind} className={`${item.flex}`}>
            {item.name}
          </div>
        ))}
      </div>
      {data.map((item, ind) => (
        <div
          className={`flex gap-1 px-5 py-5 ${
            theme === "dark"
              ? "bg-darkSecondary"
              : "bg-none border border-borderLightGray"
          } rounded-xl mb-5 `}
          key={ind}
        >
          <div className="flex-1">1</div>
          <div className="flex-[2]">Theresa Webb</div>
          <div className="flex-[2]">9003237</div>
          <div className="flex-[2]">May 29, 2017</div>
          <div className="flex-[2]">May 29, 2017</div>
          <div className="flex-1">₹9,450</div>
        </div>
      ))}
    </div>
  );
};

export default DataTable;
