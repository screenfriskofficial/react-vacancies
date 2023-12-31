import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./firebase.js";
import { StoreProvider } from "~app/providers/store-provider/StoreProvider.jsx";
import { AppProvider } from "~app/providers/router-provider/RouterProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreProvider>
      <AppProvider />
    </StoreProvider>
  </BrowserRouter>,
);
