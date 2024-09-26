import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/main.jsx";
import Influence from "./pages/Influence/influence.jsx";
import Creative from "./pages/Creative/creative.jsx";
import Performance from "./pages/Performance/performance.jsx";
import Work from "./pages/Work/work.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import About from "./pages/About/About.jsx";

const App = () => {


  return (
    <>
      <Router>
        <Header />
          <Routes >
            <Route path="/" element={<Main />} />
            <Route path="/Influence" element={<Influence />} />
            <Route path="/Performance" element={<Performance />} />
            <Route path="/Creative" element={<Creative />} />
            <Route path="/Work" element={<Work />} />
            <Route path="/About" element={<About />} />
          </Routes>
          <Footer />
      </Router>
    </>
  );
};

export default App;
