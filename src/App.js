import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Market from "./pages/Market";
import Government from "./pages/Government";
import Expert from "./pages/Expert";
import Calendar from "./pages/Calendar";
import Forum from "./pages/Forum";
import Offline from "./pages/Offline";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/market" element={<Market />} />
        <Route path="/government" element={<Government />} />
        <Route path="/expert" element={<Expert />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/offline" element={<Offline />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;




