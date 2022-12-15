import React from "react";
import Dashboard from "../dashboard/Dashboard";
import Aside from "../../starter/aside/Aside";
import Navbar from "../../starter/navbar/NavBar";

const Main = () => {
  return (
    <div className="main flex">
      <Aside />
      <div className="main_content">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Main;
