import React from "react";
import ReactDOM from "react-dom";
import RootErrorBoundary from "./RootErrorBoundary.jsx";
import Root from "./Root.jsx";

if (process.env.NODE_ENV === "development") {
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <RootErrorBoundary>
    <Root />
  </RootErrorBoundary>,
  document.getElementById("app")
);
