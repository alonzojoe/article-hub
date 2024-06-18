import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import useTheme from "../hooks/useTheme";
import FeedSpinner from "../components/FeedSpinner";
const RootLayout = () => {
  const [setAppTheme] = useTheme();
  useEffect(() => {
    setAppTheme();
  }, [setAppTheme]);

  return (
    <>
      <FeedSpinner />

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
