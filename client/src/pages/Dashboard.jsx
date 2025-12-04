import { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview"); // Sidebar tab

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <div className="mb-6">
          <p className="font-semibold">{user.username}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <nav className="flex flex-col gap-3">
          <button
            className={`text-left px-3 py-2 rounded hover:bg-green-100 ${
              activeTab === "overview" ? "bg-green-200 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`text-left px-3 py-2 rounded hover:bg-green-100 ${
              activeTab === "orders" ? "bg-green-200 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("orders")}
          >
            Orders
          </button>
          <button
            className={`text-left px-3 py-2 rounded hover:bg-green-100 ${
              activeTab === "products" ? "bg-green-200 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("products")}
          >
            Products
          </button>
          <button
            className={`text-left px-3 py-2 rounded hover:bg-green-100 ${
              activeTab === "settings" ? "bg-green-200 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {activeTab === "overview" && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4">
              Welcome, {user.username} 👋
            </h1>
            <p className="text-gray-700 mb-2">Email: {user.email}</p>
            <p className="text-gray-700 mb-4">
              Verified: {user.isVerified ? "Yes ✅" : "No ❌"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-green-100 p-4 rounded-xl">
                <h3 className="font-semibold">Total Orders</h3>
                <p>15</p>
              </div>
              <div className="bg-green-100 p-4 rounded-xl">
                <h3 className="font-semibold">Pending Orders</h3>
                <p>2</p>
              </div>
              <div className="bg-green-100 p-4 rounded-xl">
                <h3 className="font-semibold">Total Revenue</h3>
                <p>$1200</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Your Orders</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg">
                <h3 className="font-semibold mb-2">Order #12345</h3>
                <p>Status: Delivered ✅</p>
                <p>Total: $250</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg">
                <h3 className="font-semibold mb-2">Order #12346</h3>
                <p>Status: Pending ⏳</p>
                <p>Total: $120</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Your Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg">
                <h3 className="font-semibold mb-2">Product 1</h3>
                <p>Status: Active</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg">
                <h3 className="font-semibold mb-2">Product 2</h3>
                <p>Status: Active</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <p>Here you can manage your account settings.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
