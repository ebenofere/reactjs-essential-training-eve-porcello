import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// const [mostImportantItem] = ["boots", "tents", "headlamp"];
// console.log(mostImportantItem);

// const [mostImportantItem, secondItem] = ["boots", "tents", "headlamp"];
// console.log(secondItem);

// const [, secondItem] = ["boots", "tents", "headlamp"];
// console.log(secondItem);

const [, , thirdItem] = ["boots", "tents", "headlamp"];
console.log(thirdItem);

ReactDOM.render(
  <React.StrictMode>
    <App authorized={false} />
  </React.StrictMode>,
  document.getElementById("root")
);
