import React from "react";
import { Route, Routes } from "react-router-dom";
import Accounts from "../../pages/Accounts";
import PurchaseOrder from "../../pages/Accounts/PurchaseOrder";
import AddPurchaseOrder from "../../pages/Accounts/AddPurchaseOrder";

const AccoutsRoutes = () => {
  return (
    <Routes>
      <Route index element={<Accounts />} />
      <Route path="purchase-order" element={<PurchaseOrder />} />
      <Route
        path="purchase-order/add-purchase-order"
        element={<AddPurchaseOrder />}
      />
    </Routes>
  );
};

export default AccoutsRoutes;
