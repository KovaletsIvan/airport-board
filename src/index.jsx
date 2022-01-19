import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import 'normalize.css'
import "./index.scss";

const rootElement = document.querySelector("#root");

ReactDOM.render(<App />, rootElement);
