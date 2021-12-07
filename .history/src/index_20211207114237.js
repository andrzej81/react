import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Batman</h1>
      <h1>DUPA</h1>
      <h1>eferg</h1>
      <h1>rgrgn</h1>
    </div>
    <div>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
    React.createElement( "div", null, React.createElement( "h1", null, "Batman"
    ), React.createElement( "h1", null, "Iron Man" ), React.createElement( "h1",
    null, "Nicolas Cage" ), React.createElement( "h1", null, "Mega Man" )
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
