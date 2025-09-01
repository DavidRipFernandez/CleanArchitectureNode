import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

const basename = process.env.PUBLIC_URL || "/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
