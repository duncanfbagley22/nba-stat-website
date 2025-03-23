import Navbar from "./components/Navbar";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NBAFirsts from "./pages/NBAFirsts"; // Import page components
import Interesting from "./pages/Interesting";
import ThingsToWatch from "./pages/ThingsToWatch";
import About from "./pages/About";

const App = () => {
  return (
    <Router basename="/nba-stat-website">
      <Navbar />
      <Routes>
        <Route path="/" element={<NBAFirsts />} />
        <Route path="/nbafirsts" element={<NBAFirsts />} />
        <Route path="/interesting" element={<Interesting />} />
        <Route path="/thingstowatch" element={<ThingsToWatch />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
