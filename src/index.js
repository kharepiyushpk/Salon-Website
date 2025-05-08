import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SalonWebsite from "./App";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SalonWebsite />
  </React.StrictMode>
);
