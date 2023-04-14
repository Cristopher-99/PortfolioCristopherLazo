import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";
import Landing from "./Views/Landing/Landing.jsx";
import Contact from "./Views/Contact/Contact.jsx";
import About from "./Views/About/About";
import Projects from "./Views/Projects/Projects";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Views/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exac path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
