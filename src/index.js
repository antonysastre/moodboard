import React from "react";
import { render } from "react-dom";
import "./index.css";
import Router from "./components/Router";
import registerServiceWorker from "./registerServiceWorker";

const router = <Router />;

render(router, document.getElementById("root"));
registerServiceWorker();
