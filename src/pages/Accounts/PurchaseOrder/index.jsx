import { CaretDown, MagnifyingGlass, Plus } from "@phosphor-icons/react";
import React, { useState } from "react";
import BreadCrumps from "../../../components/BreadCrumbs";
import { useSelector } from "react-redux";
import FilterDataButton from "../../../components/FilterDataButton";
import DataTable from "../../../components/DataTable";
import BlueButton from "../../../components/BlueButton";
import SelectModal from "../../../components/SelectModal";
import FilterModal from "../../../components/FilterModal";
import MobileTableContainer from "../../../components/MobileTableContainer";
import { Button } from "@mui/material";
import { AddButtonIconStyle } from "../../../utils/muiStyles";
import { PurchaseOrderColumn } from "../../../utils/constance";
import { useNavigate } from "react-router-dom";

const PurchaseOrder = () => {
  const breadcrumps = [
    { name: "Purchase", url: "/accounts" },
    { name: "Purchase Order" },
  ];

  const theme = useSelector((state) => state.theme.theme);

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filter, setFilter] = useState("");
  const [entity, setEntity] = useState("Entity No 1");
  const [entityModal, setEntityModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const navigate = useNavigate();

  const entityList = [
    "Entity No 1",
    "Entity No 2",
    "Entity No 3",
    "Entity No 4",
  ];

  const handleClose = (type) => {
    switch (type) {
      case "date":
        setEndDate("");
        setStartDate("");
        break;
      case "filter":
        setFilter("");
        break;
      default:
        break;
    }
  };

  const handleSelectModal = (item) => {
    setEntity(item);
    setEntityModalOpen(false);
  };

  return (
    <div className="max-md:p-5 relative  ">
      <div className="flex justify-between  items-center mb-5">
        <BreadCrumps breadcrumps={breadcrumps} />
        <div className="max-md:hidden">
          <BlueButton onClick={()=>navigate("add-purchase-order")}>
            <Plus size={20} className="font-[500]" />
            <span>Add Item</span>
          </BlueButton>
        </div>
      </div>

      <div className="flex gap-5 items-center md:mb-10 max-lg:flex-col max-lg:items-start ">
        <div className="flex items-center gap-5 max-md:w-full  max-md:justify-between">
          <div
            className={`w-[230px] h-10 ${
              theme === "dark" ? "bg-black border-borderGray" : " shadow-md border-black"
            } border  rounded-md flex gap-3 items-center px-2`}
          >
            <MagnifyingGlass size={20} />
            <input
              type="text"
              placeholder="Search..."
              className={`w-full h-full bg-transparent ${
                theme === "dark"
                  ? "placeholder:text-darkHeading"
                  : "placeholder:text-[#696868]"
              } placeholder:font-extralight placeholder:tracking-wider  outline-none text-sm`}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div
            className={` px-5 py-2 w-[100px] text-center ${
              theme === "dark"
                ? "bg-darkSecondary"
                : "bg-specialBlue/10 text-black border border-specialBlue/50"
            } rounded-lg shadow cursor-pointer   `}
            onClick={() => setFilterModalOpen(true)}
          >
            Filter
          </div>
        </div>
        <div className="flex items-center gap-5">
          {startDate && endDate && (
            <FilterDataButton
              value={`${startDate} - ${endDate}`}
              handleClose={() => handleClose("date")}
            />
          )}
          {filter && (
            <FilterDataButton
              value={filter}
              handleClose={() => handleClose("filter")}
            />
          )}
        </div>
      </div>

      {/* <div className="relative ">
          <div
            className="px-3 w-[150px] py-1 flex justify-center items-center gap-2 border border-borderGray rounded-lg cursor-pointer "
            onClick={() => setEntityModalOpen((prev) => !prev)}
          >
            <div>{entity}</div>
            <CaretDown size={15} />
          </div>
          {entityModal && (
            <SelectModal
              handleSelectModal={handleSelectModal}
              dataList={entityList}
            />
          )}
        </div>
      </div> */}
      <DataTable
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        columns={PurchaseOrderColumn}
      />
      <MobileTableContainer
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        title="Order List"
      />
      {filterModalOpen && (
        <FilterModal
          filterModalOpen={filterModalOpen}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setFilterModalOpen={setFilterModalOpen}
          setFilter={setFilter}
          filter={filter}
        />
      )}
      <div className="fixed bottom-[40px] left-[50%]  -translate-x-1/2 md:hidden">
        <Button
          variant="contained"
          style={{ backgroundColor: "#4285F4" }}
          sx={AddButtonIconStyle}
          onClick={()=>navigate("add-purchase-order")}
        >
          <Plus size={35} className="text-white font-semibold " />
        </Button>
      </div>
    </div>
  );
};

export default PurchaseOrder;
