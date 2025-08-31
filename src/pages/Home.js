import React from "react";
import { Link } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import "./Home.css";
import farmVideo from "../assets/farmervid.mp4"; // Video


function Home() {
  return (
    <div className="home-container">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src={farmVideo} type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="content-overlay">
        <h1 className="home-title">🌿 RAITHA BANDU 🌿</h1>

        {/* Dashboard Cards */}
        <div className="dashboard-container">
          <Link to="/weather"><DashboardCard title="🌦️ Weather" description="Check real-time weather updates." /></Link>
          <Link to="/market"><DashboardCard title="📈 Market Prices" description="View crop and livestock market trends." /></Link>
          <Link to="/government"><DashboardCard title="🏛️ Government Schemes" description="Latest subsidies, loans & policies." /></Link>
          <Link to="/expert"><DashboardCard title="👨‍🌾 Expert Advice" description="Tips & suggestions from experts." /></Link>
          <Link to="/calendar"><DashboardCard title="📅 Farming Calendar" description="Track sowing, fertilizing & harvesting dates." /></Link>
          <Link to="/forum"><DashboardCard title="💬 Farmer Forum" description="Discuss & share knowledge with farmers." /></Link>
          <Link to="/offline"><DashboardCard title="📶 Offline Mode" description="Access data without internet." /></Link>
        </div>


      </div>
    </div>
  );
}

export default Home;

