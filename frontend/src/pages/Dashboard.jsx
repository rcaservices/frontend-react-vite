import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p>Welcome to your dashboard!</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
