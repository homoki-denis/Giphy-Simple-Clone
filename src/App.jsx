import "./App.scss";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <SearchBar />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
