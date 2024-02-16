import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CalendarPlus } from "@phosphor-icons/react";
import dayjs from "dayjs";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const OutsideClickHandler = ({ children, onOutsideClick }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onOutsideClick]);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      onOutsideClick();
    }
  };

  return <div ref={containerRef}>{children}</div>;
};

const DateCallender = ({ selected, setSeleceted, label, left }) => {
  const theme = useSelector((state) => state.theme.theme);
  const [date, setDate] = useState(dayjs(new Date()));
  const [open, setOpen] = useState(false);

  const handleDateUpdate = (newate) => {
    setDate(newate);
    const formattedDate = dayjs(newate).format("DD/MM/YYYY");
    setSeleceted(formattedDate);
    setOpen(!open);
  };

  const handleOutsideClick = () => {
    setOpen(false);
  };

  const handleButtonClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-1 w-full h-[50px]">
      <label
        htmlFor=""
        className={`text-[13px] font-light ${
          theme === "dark" ? "text-[#ffffff99]" : "text-blackz"
        }`}
      >
        {label && label}
      </label>
      <div
        className={`border-b ${
          theme === "dark" ? "border-b-borderGray" : "border-b-black"
        } flex justify-between items-center relative py-2  `}
      >
        <input
          type="text"
          className="w-full h-full outline-none bg-transparent mr-2"
          value={selected}
          onChange={(e) => setSeleceted(e.target.value)}
          placeholder={`Enter ${label}`}
        />
        <div onClick={handleButtonClick} className=" cursor-pointer">
          <CalendarPlus size={20} />
        </div>
        {open && (
          <OutsideClickHandler onOutsideClick={handleOutsideClick}>
            <div
              className={`absolute z-[999] ${
                theme === "dark" ? "bg-black" : "bg-white"
              } top-10 ${left ? left : "left-0"} max-sm:-left-5 rounded-lg `}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  sx={{
                    backgroundColor: theme === "dark" ? "black" : "white",
                    borderRadius: "10px",
                    width: "280px",
                    height: "300px",
                  }}
                  value={date || new Date()}
                  onChange={(newDate) => {
                    handleDateUpdate(newDate);
                  }}
                />
              </LocalizationProvider>
            </div>
          </OutsideClickHandler>
        )}
      </div>
    </div>
  );
};

export default DateCallender;
