import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/About/About";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Home />
        <About/>
      </div>
    </>
  );
}

export default App;
