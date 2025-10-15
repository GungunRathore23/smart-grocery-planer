import React, { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHero from "./DashboardHero";

const AdminDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("View All Items");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <DashboardSidebar onSelect={setSelectedMenu} />

      {/* Main Area */}
      <DashboardHero selectedMenu={selectedMenu} />
    </div>
  );
};

export default AdminDashboard;
