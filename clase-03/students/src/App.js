import React from "react";

import logo from "./logo.svg";
import "./App.css";

const MyComponent = props => (
  <div>
    <code>{JSON.stringify(props, null, 2)}</code>
  </div>
);

function App() {
  return (
    <div className="App">
      <MyComponent value="Area" place="51" />
    </div>
  );
}

export default App;
