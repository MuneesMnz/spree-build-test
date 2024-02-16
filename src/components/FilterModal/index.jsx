import { Box, Modal, useTheme } from "@mui/material";
import { X } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import DateCallender from "../MUI/DateCallender";
import AutocompleteField from "../MUI/AutocompleteFiled";
import ColorButton from "../ColorButton";
import { getModalStyle } from "../../utils/muiStyles";
import { cashDropList } from "../../utils/constance";
import { useSelector } from "react-redux";

const FilterModal = ({
  filterModalOpen,
  handleClose,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  setFilterModalOpen,
  setFilter,
  filter,
}) => {
  const muiTheme = useTheme();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const customeStyle = getModalStyle(muiTheme, windowWidth, windowHeight);

  // Update window width when the component mounts and when it resizes
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleApply = () => {
    setStartDate(startDate);
    setEndDate(endDate);
    setFilterModalOpen(false);
    setFilter(filter);
  };

  return (
    <Modal
      keepMounted
      open={filterModalOpen}
      onClose={() => setFilterModalOpen(false)}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      sx={{ outline: "none" }}
    >
      <Box sx={customeStyle}>
        <div className="flex flex-col justify-between h-full ">
          <div>
            <div className="px-10 py-5 border-b border-b-borderGray tracking-wide flex justify-between items-center">
              <h4 className="text-lg">Filter</h4>
              <X
                size={20}
                onClick={() => setFilterModalOpen(false)}
                className=" cursor-pointer"
              />
            </div>
            <div className="py-5 px-10">
              <div className="flex justify-between items-center gap-10 mb-10 max-md:flex-col">
                <DateCallender
                  selected={startDate}
                  setSeleceted={setStartDate}
                  label={"Start Date"}
                />
                <DateCallender
                  selected={endDate}
                  setSeleceted={setEndDate}
                  label={"End Date"}
                />
              </div>
              <AutocompleteField
                dataList={cashDropList}
                label="Cash / Party"
                value={filter}
                setValue={setFilter}
                placeholder={"Select an Item"}
              />
            </div>
          </div>
          <div className="p-5 w-full flex justify-center">
            <ColorButton label={"Apply"} white onClick={handleApply} />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default FilterModal;
