import { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/home";
import About from "./components/About/About";
import Projects from "./components/Projects/projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/resume";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div
        className="bg-slate-950 bg-cover min-h-screen text-center"
        id={load ? "no-scroll" : "scroll"}
      >
        <Navbar />
        <Routes>
          <Route path="/chappiii.github.io" element={<Home />} />
          <Route path="/chappiii.github.io/project" element={<Projects />} />
          <Route path="/chappiii.github.io/about" element={<About />} />
          <Route path="/chappiii.github.io/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/chappiii.github.io" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
