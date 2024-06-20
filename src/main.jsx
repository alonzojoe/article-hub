import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import "./assets/css/style.min.css";
import "./assets/libs/theme.bundle.min.js";
import "./assets/css/tabler-icons.css";
import "./assets/css/custom-style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
