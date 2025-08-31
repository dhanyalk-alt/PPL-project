import React from "react";

function DashboardCard({ title, description }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #35b359ff, #7cd0e6ff)",
        borderRadius: "15px",
        padding: "20px",
        width: "250px",
        height: "150px",
        boxShadow: "0px 6px 15px rgba(12, 11, 11, 0.2)",
        transition: "transform 0.3s",
        color: "#0f0f0fff",
        fontWeight: "bold",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h2 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>{title}</h2>
      <p style={{ fontSize: "0.9rem" }}>{description}</p>
    </div>
  );
}

export default DashboardCard;


