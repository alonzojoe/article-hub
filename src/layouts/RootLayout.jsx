import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { getLocalStorage } from "../utils/storageActions";
import { uiActions } from "../store/slices/uiSlice";
const RootLayout = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector((state) => state.ui.appTheme);

  useEffect(() => {
    console.log("useEffect");
    const detectDefaultTheme = () => {
      const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      dispatch(uiActions.changeTheme(preferredTheme));
    };

    if (!getLocalStorage("appTheme")) {
      console.log("localS", !getLocalStorage("appTheme"));
      detectDefaultTheme();
    }
  }, [dispatch]);

  return (
    <>
      <h1>{appTheme}</h1>
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
