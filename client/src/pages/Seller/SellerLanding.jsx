import { Link } from "react-router-dom";

function SellerLanding() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 md:px-20">
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 text-center">
        Start Selling on <span className="text-purple-900">Smarter Grocery Planner</span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-lg md:text-xl text-gray-600 text-center max-w-2xl">
        Grow your business by selling directly to customers. Manage your products, track orders, and boost your sales effortlessly.
      </p>

      {/* Button */}
      <Link to="/seller-register">
        <button className="mt-8 bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl">
          Start Selling
        </button>
      </Link>

      {/* Decorative Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="bg-purple-600 text-white p-2 rounded-full">🚀</span>
              Fast & Reliable Delivery
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-purple-600 text-white p-2 rounded-full">📦</span>
              Easy Order Management
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-purple-600 text-white p-2 rounded-full">💬</span>
              24/7 Customer Support
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-purple-600 text-white p-2 rounded-full">💰</span>
              Competitive Pricing
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <img
            src="/src/assets/images/seller-dashboard.jpg"
            alt="Seller Dashboard"
            className="w-full h-auto rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default SellerLanding;
