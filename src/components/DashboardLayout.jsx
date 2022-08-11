import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-lightgreen">
      <Sidebar />
      <div className="sm:ml-257px ml-50px flex-1">
        <TopBar />
        <div className=" bg-lightgreen sm:px-10 px-2 mt-90px">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;