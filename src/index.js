import React from "react";
import ReactDOM from "react-dom";
import helloWorld from "./helloWorld";
import ReactBabel from "./reactBabel";

document.write(helloWorld());

ReactDOM.render(
  <ReactBabel />,
  document.getElementById('root')
)