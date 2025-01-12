import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../../home/src/Header";

import Form from "payPremiumApp/Form";
const GetInsuranceDetails = React.lazy(() => import('getPremiumApp/GetInsuranceDetails'));

import "./index.scss";


const App = () => {
  return (
    <div>
      <Header/>
      <React.Suspense fallback="Loading...">
        <GetInsuranceDetails/>
        <Form />
      </React.Suspense>
    </div>
  );
};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)