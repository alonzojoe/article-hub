import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../utils/storageActions";
import { getDeviceTheme } from "../../utils/theme";

const currentTheme = getLocalStorage("appTheme");
const deviceTheme = getDeviceTheme();

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    appTheme: currentTheme ? currentTheme : deviceTheme,
  },
  reducers: {
    changeTheme(state, action) {
      // console.log("pay;", action.payload);
      state.appTheme = action.payload;
      setLocalStorage("appTheme", action.payload);

      const head = document.head;
      let link = document.getElementById("dark-theme");

      if (action.payload === "dark") {
        if (!link) {
          console.log("action payload");
          link = document.createElement("link");
          link.rel = "stylesheet";
          link.id = "dark-theme";
          link.href = "/style-dark.min.css";
          head.appendChild(link);
        }
      } else {
        if (link) {
          head.removeChild(link);
        }
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
