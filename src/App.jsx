import { useState } from "react";
import "./App.css";
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import { useSelector } from "react-redux";
import PurchaseOrder from "./pages/Accounts/PurchaseOrder";
import AccoutsRoutes from "./routes/AccoutsRoutes";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "../theme";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <div
        className={`${
          theme === "light"
            ? "text-color-light background-color-light"
            : "text-color-dark background-color-dark"
        } `}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/accounts/*" element={<AccoutsRoutes />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
