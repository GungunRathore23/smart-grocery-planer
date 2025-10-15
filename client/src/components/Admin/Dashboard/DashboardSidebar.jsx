import React from "react";

const DashboardSidebar = ({ onSelect }) => {
  const menuItems = [
    "View All Items",
    "Add Item",
  ];

  return (
    <div className="bg-green-900 text-white w-64 min-h-screen p-6 flex flex-col space-y-6">
      <h2 className="text-2xl font-bold mb-4">Grocery Management Hub</h2>
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => onSelect(item)}
          className="bg-green-700 hover:bg-green-600 py-2 px-4 rounded-lg text-left transition duration-300"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default DashboardSidebar;
