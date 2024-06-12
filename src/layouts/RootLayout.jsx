import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
const RootLayout = () => {
  return (
    <>
      <div id="main-wrapper">
        <div
          className="page-wrapper"
          id="main-wrapper"
          data-layout="vertical"
          data-navbarbg="skin6"
          data-sidebartype="full"
          data-header-position="fixed"
        >
          <Navbar />
          <div className="body-wrapper">
            <div className="container-fluid">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
