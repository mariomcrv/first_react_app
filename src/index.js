import React from "react"; // imports React object from the dependencies
import ReactDOM from "react-dom"; // imports the ReactDom object from dependencies

import "./index.css";
import App from "./App"; //App class from ./App location

// ok, attention here, ReactDom uses functions to render
// we pass two parameters, the app and the root id from the index html file
// so, we render in the root id of the html what is in the App.js
// we are saying which component to load and where
ReactDOM.render(<App />, document.getElementById("root"));
