import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { getLocalStorage } from "../utils/storageActions";
import { uiActions } from "../store/slices/uiSlice";

const RootLayout = () => {
  const dispatch = useDispatch();
  const localStorageTheme = getLocalStorage("appTheme");
  console.log("lstorage", localStorageTheme);
  useEffect(() => {
    const setDarkTheme = () => {
      dispatch(uiActions.changeTheme("dark"));
    };

    if (localStorageTheme === "dark") setDarkTheme();

    console.log("useEffect");
  }, [dispatch, localStorageTheme]);

  return (
    <>
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
