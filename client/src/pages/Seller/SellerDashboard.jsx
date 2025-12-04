import { useEffect, useState } from "react";

function SellerDashboardLayout({ children }) {
  const [sellerName, setSellerName] = useState("Seller");
  const [sellerEmail, setSellerEmail] = useState("example@gmail.com");

  useEffect(() => {
    const name = localStorage.getItem("sellerName");
    const email = localStorage.getItem("sellerEmail");

    if (name) setSellerName(name);
    if (email) setSellerEmail(email);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex">

      {/* LEFT SIDEBAR */}
      <aside className="w-72 bg-white shadow-xl border-r border-gray-200 min-h-screen p-6 flex flex-col justify-between fixed">

        {/* LOGO */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-green-900 text-white p-3 rounded-xl text-xl font-bold">
              SG
            </div>
            <h1 className="text-2xl font-bold text-green-900">SmartGro</h1>
          </div>

          {/* MAIN MENU */}
          <nav className="space-y-4 text-gray-700 text-[17px] font-medium">
            <button className="w-full text-left hover:text-green-800 transition">🏠 Dashboard</button>
            <button className="w-full text-left hover:text-green-800 transition">📦 Inventory</button>
            <button className="w-full text-left hover:text-green-800 transition">🛍️ Products</button>
            <button className="w-full text-left hover:text-green-800 transition">🏪 Store</button>
            <button className="w-full text-left hover:text-green-800 transition">👥 Customers</button>
            <button className="w-full text-left hover:text-green-800 transition">📊 Analytics</button>
            <button className="w-full text-left hover:text-green-800 transition">🔔 Notifications</button>
            <button className="w-full text-left hover:text-green-800 transition">📑 Reports</button>
          </nav>

          {/* OTHERS SECTION */}
          <div className="mt-10">
            <p className="text-gray-400 uppercase tracking-wider text-sm mb-3">
              Others
            </p>

            <div className="space-y-4 text-gray-700 font-medium text-[16px]">
              <button className="w-full text-left hover:text-green-800 transition">
                🛠️ Help Center
              </button>

              <button className="w-full text-left hover:text-green-800 transition">
                ⚙️ Settings
              </button>
            </div>
          </div>
        </div>

        {/* USER PROFILE BOTTOM */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="flex items-center gap-3">
            <div className="bg-green-900 text-white rounded-full w-11 h-11 flex items-center justify-center text-lg font-bold">
              {sellerName?.charAt(0)}
            </div>

            <div>
              <p className="font-semibold text-gray-800">{sellerName}</p>
              <p className="text-sm text-gray-500">{sellerEmail}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* RIGHT MAIN CONTENT */}
      <main className="flex-1 ml-72 p-8">

        {/* TOP NAVBAR */}
        <div className="w-full flex justify-between items-center mb-10 mt-4">

          {/* Greeting */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Hello, {sellerName} 👋
            </h2>
            <p className="text-gray-500 text-sm">
              Welcome back to SmartGro Seller Dashboard
            </p>
          </div>

          {/* Right Side Navbar */}
          <div className="flex items-center gap-6">

            {/* SEARCH */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search anything..."
                className="px-5 py-2.5 w-72 rounded-full border border-gray-300 focus:outline-none focus:border-green-700 shadow-sm"
              />
              <span className="absolute right-4 top-2.5 text-gray-500">🔍</span>
            </div>

            {/* NOTIFICATION */}
            <button className="relative bg-white p-3 rounded-full shadow hover:bg-gray-100 transition">
              🔔
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* PROFILE CARD */}
            <div className="flex items-center gap-3 bg-white py-2 px-3 rounded-xl shadow">
              <div className="bg-green-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {sellerName?.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{sellerName}</p>
                <p className="text-xs text-gray-500">{sellerEmail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        {children}
      </main>
    </div>
  );
}

export default SellerDashboardLayout;
