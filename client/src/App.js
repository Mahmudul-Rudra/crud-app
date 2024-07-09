import React from "react";
import { Routes, Route } from "react-router-dom";
import MoneyManagementDetails from "./Pages/MoneyManagementDetails";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MoneyManagementDetails />} />
    </Routes>
  );
};

export default App;
