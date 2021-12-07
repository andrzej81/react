import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./Login.css";
import reportWebVitals from "./reportWebVitals";

var dest = document.getElementById("root");
//var dest = document.querySelector("#container");
/*ReactDOM.render(
  <React.StrictMode>
    <h1>Andrzej Iwaniuk</h1>
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
  </React.StrictMode>,
  dest
);*/

ReactDOM.render(
  <div className="login-wrapper">
    <h1>Please Log In</h1>
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>,
  dest
);

reportWebVitals();
