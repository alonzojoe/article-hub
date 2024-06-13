import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../utils/storageActions";

const currentTheme = getLocalStorage("appTheme");

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    appTheme: currentTheme
      ? currentTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  },
  reducers: {
    changeTheme(state, action) {
      console.log("pay;", action.payload);
      state.appTheme = action.payload;
      // setLocalStorage("appTheme", action.payload);

      const head = document.head;
      const link = document.getElementById("dark-theme");

      if (action.payload === "dark") {
        if (link) {
          link = document.createElement("link");
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
