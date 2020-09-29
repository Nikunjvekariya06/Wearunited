import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assests/scss/style.scss";
import App from "../src/view/pages/App";
import "bootstrap/dist/css/bootstrap.min.css";

import * as servicesWorker from "./serviceWorker";
ReactDOM.render(<App />, document.getElementById("root"));

servicesWorker.unregister();
