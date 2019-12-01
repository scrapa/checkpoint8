import React from "react";
import ReactDOM from "react-dom";
import Adam from "./class";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Adam />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
