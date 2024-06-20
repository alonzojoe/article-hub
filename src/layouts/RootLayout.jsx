import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import FeedSpinner from "../components/FeedSpinner";
import { useSelector } from "react-redux";
const RootLayout = () => {
  const auth = useSelector((state) => state.auth);


  return (
    <>
      <FeedSpinner />
      {JSON.stringify(auth)}
      <div id="main-wrapper">
        <div
          className="page-wrapper"
          id="main-wrapper"
          data-layout="vertical"
          data-navbarbg="skin6"
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
