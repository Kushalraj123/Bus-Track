import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// if you add Material-UI or Bootstrap, import styles here
// import "@mui/material/styles"; or "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
