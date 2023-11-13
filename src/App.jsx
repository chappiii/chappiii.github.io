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
// import ScrollToTop from "./components/ScrollToTop";
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
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
