import React, { useState } from "react";
import BreadCrumps from "../../../components/BreadCrumbs";
import InputFiled from "../../../components/InputFiled";
import DateCallender from "../../../components/MUI/DateCallender";

const AddPurchaseOrder = () => {
  const breadcrumps = [
    { name: "Purchase", url: "/accounts" },
    { name: "Purchase Order", url: "/accounts/purchase-order" },
    { name: "Add Purchase Order" },
  ];

  const [orderDate, setOrderDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  return (
    <div className="max-md:p-5 ">
      <BreadCrumps breadcrumps={breadcrumps} />
      <div className="flex justify-between ">
        <div className="">
          <InputFiled
            type="text"
            placeholder="Enter Order No"
            label={"Order Number*"}
          />
          <div>aaa</div>
        </div>
        <div>
          <div className="flex gap-5 mb-5 ">
            <DateCallender
              selected={orderDate}
              setSeleceted={setOrderDate}
              label={"Order Date*"}
            />
            <DateCallender
              selected={dueDate}
              setSeleceted={setDueDate}
              label={"Due Date*"}
              left={"-left-2"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPurchaseOrder;
