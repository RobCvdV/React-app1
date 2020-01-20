import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Much better hi there"></Title>
      </main>
      <p>Here we go I guess. Time to React properly.</p>
    </div>
  );
}

export default App;
