import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rems" }}></div>
      <Home />
    </div>
  );
}

export default App;
