import { useNavigate } from "react-router-dom";
import greenbackground from "../assets/images/greenbackground.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* Hero Section */}
      <section className="flex flex-col realative h-[100vh] w-full justify-center items-center text-center px-4 py-32 bg-gray-100">
        <img src={greenbackground} alt="greenbackground" className="absolute inset-0 w-full h-full object-cover" />

        {/* overlay  */}
        <div className="absolute inset-0 bg-black/40"></div>


        <div className="relative z-20 ">
          <h1 className="text-5xl font-bold text-white mb-6">
            Smarter Grocery Planner
          </h1>
          <p className="text-lg text-white mb-8 max-w-xl">
            Plan your groceries efficiently, save time, and never forget what you need.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/signup")}
              className="bg-green-950 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300 font-semibold"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-indigo-500 px-6 py-3 rounded-lg border border-indigo-500 hover:bg-indigo-50 transition-all duration-300 font-semibold"
            >
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col md:flex-row justify-around items-center px-4 py-16 space-y-8 md:space-y-0">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-full md:w-1/3 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Smart Lists</h2>
          <p className="text-gray-600">Automatically create grocery lists based on your meals.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-full md:w-1/3 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Recipe Suggestions</h2>
          <p className="text-gray-600">Get recipes using items you already have at home.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-full md:w-1/3 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Track Expiry</h2>
          <p className="text-gray-600">Never let your groceries go to waste again.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to plan smarter?
        </h2>
        <button
          onClick={() => navigate("/signup")}
          className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300 font-semibold"
        >
          Sign Up Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center shadow-inner mt-auto">
        <p className="text-gray-600">© 2025 Smarter Grocery Planner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
