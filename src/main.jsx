import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-black text-neutral-100 min-h-screen ">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </div>
);
