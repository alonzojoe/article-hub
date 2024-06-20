import { Outlet } from "react-router-dom";
import api from "../services/api";
import Navbar from "./components/Navbar";

import FeedSpinner from "../components/FeedSpinner";
import { useSelector } from "react-redux";
const RootLayout = () => {
  const auth = useSelector((state) => state.auth);

  const checkApi = async () => {
    await api.post("/auth/me");
  };

  return (
    <>
      <FeedSpinner />
      <button onClick={checkApi}>CheckAPI</button>
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
