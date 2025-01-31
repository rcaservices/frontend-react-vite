import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul>
        <li className="mb-2"><Link to="/" className="block p-2 hover:bg-gray-700">Dashboard</Link></li>
        <li><Link to="/login" className="block p-2 hover:bg-gray-700">Login</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
