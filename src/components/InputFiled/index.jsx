import React from "react";

const InputFiled = ({ label, placeholder, type, name, onChange, value }) => {
  return (
    <div className="w-full h-[50px] flex flex-col gap-1 mb-5">
      <label htmlFor="" className="text-[12px]  font-light">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-full outline-none bg-transparent border-b border-b-borderGray placeholder:font-light text-[15px] py-2 "
      />
    </div>
  );
};

export default InputFiled;
