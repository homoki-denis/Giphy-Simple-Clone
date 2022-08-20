import "./App.scss";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
