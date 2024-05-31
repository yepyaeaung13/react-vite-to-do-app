import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "animate.css";

const rootElement = document.querySelector("#root");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
