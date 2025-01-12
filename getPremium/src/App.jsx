import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import GetInsuranceDetails from "./GetInsuranceDetails";
// import Form from "payPremium/Form";

const App = () => (
  
  <div>
      <GetInsuranceDetails/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)