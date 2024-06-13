import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Routes.jsx";
import ReduxProvider from "./Redux/ReduxProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider>
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  </ReduxProvider>
);
