import React from "react";

const SelectModal = ({ dataList, handleSelectModal }) => {
  return (
    <div className="absolute top-10 left-0 w-full h-auto  bg-darkSecondary  py-1 text-[15px] rounded-lg shadow-lg ">
      {dataList.map((item, ind) => (
        <div className={`hover:bg-black/30 w-full px-3    `} key={item}>
          <div
            className={` cursor-pointer  text-center py-2 ${
              dataList.length - 1 !== ind && "border-b border-b-borderGray"
            } `}
            onClick={() => handleSelectModal(item)}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectModal;
