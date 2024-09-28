import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/main.jsx";
import Influence from "./pages/Influence/influence.jsx";
import Creative from "./pages/Creative/creative.jsx";
import Performance from "./pages/Performance/performance.jsx";
import Work from "./pages/Work/work.jsx";
import About from "./pages/About/About.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import EventCalendar from "./pages/EventCalendar/EventCalendar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import MessageSidebar from "./components/MessageSidebar/MessageSidebar.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Influence" element={<Influence />} />
          <Route path="/Performance" element={<Performance />} />
          <Route path="/Creative" element={<Creative />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/About" element={<About />} />
          <Route path="/Calendar" element={<EventCalendar />} />
        </Routes>
      </PageTransition>
      <Sidebar />
      <MessageSidebar />
      <Footer />
    </Router>
  );
};

export default App;
