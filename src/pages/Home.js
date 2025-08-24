import React from "react";
import { Link } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">🌾 FARMER FRIEND 🌾</h1>

      <div className="dashboard-container">
        <Link to="/weather"><DashboardCard title="🌦️ Weather" description="Check real-time weather updates." /></Link>
        <Link to="/market"><DashboardCard title="📈 Market Prices" description="View crop and livestock market trends." /></Link>
        <Link to="/government"><DashboardCard title="🏛️ Government Schemes" description="Latest subsidies, loans & policies." /></Link>
        <Link to="/expert"><DashboardCard title="👨‍🌾 Expert Advice" description="Tips & suggestions from experts." /></Link>
        <Link to="/calendar"><DashboardCard title="📅 Farming Calendar" description="Track sowing, fertilizing & harvesting dates." /></Link>
        <Link to="/forum"><DashboardCard title="💬 Farmer Forum" description="Discuss & share knowledge with farmers." /></Link>
        <Link to="/offline"><DashboardCard title="📶 Offline Mode" description="Access data without internet." /></Link>
      </div>

      <div className="farmer-image">
        <img
          src="c:\Users\dhany\Downloads\farmer.jpg"
          alt="Farmer in field"
        />
      </div>
    </div>
  );
}

export default Home;



