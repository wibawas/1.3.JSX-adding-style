import React from "react";
import ReactDOM from "react-dom";

const DATE = new Date();
const zone = DATE.toLocaleDateString("id-ID");
const hour = DATE.getHours();
let says = "";

if (6 >= hour <= 12) {
  says = "Good Afternoon";
  style = {
    color: "red"
  };
} else {
  says = "Good Evening";
  style = {
    color: "blue"
  };
}

ReactDOM.render(
  <div>
    <h1 style={style} className="heading">
      {says}
    </h1>
    <ol className="list">
      <li>comment satu</li>
      <li>comment dua</li>
      <li>comment tiga</li>
    </ol>
  </div>,

  document.getElementById("root")
);
