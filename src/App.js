import React from "react";
import HomePage from "./pages/HomePage";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <HomePage />
    </div>
  );
}

export default App;
