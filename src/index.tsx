import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Loader from "./components/loader/Loader";
import SmoothScroll from "./scrollsmooth";

ReactDOM.render(
  <SmoothScroll>
    <Suspense fallback={<Loader />}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </SmoothScroll>,
  document.getElementById("root")
);
reportWebVitals();
