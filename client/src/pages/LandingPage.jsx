import { useNavigate } from "react-router-dom";
import GroceryItems from "../components/screens/LandingPage/GroceryItems";
import Hero from "../components/screens/LandingPage/Hero";
import PopularCategory from "../components/screens/LandingPage/PopularCategory";
import QualityAndAdvantage from "../components/screens/LandingPage/QualityAndAdvantage";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* Hero Section */}
      <Hero />

      {/* Popular Categories Section */}
      <PopularCategory />

      {/* Quality & Advantages Section */}
      <QualityAndAdvantage />


      {/* Grocery Items Section */}
      <GroceryItems />


      {/* Why We're Best Quality Grocery Shopper Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">

          {/* LEFT SIDE: Text + Points */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Why We're Best Quality Grocery Shopper</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We offer a wide variety of products to choose from. You can find everything you need to feed your family.
            </p>

            {/* 4 POINTS with Icons */}
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="bg-green-800 text-white p-2 rounded-full">
                  ✅
                </span>
                Extra Fastest Delivery
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="bg-green-800 text-white p-2 rounded-full">
                  📦
                </span>
                Track and Manage Order
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="bg-green-800 text-white p-2 rounded-full">
                  💬
                </span>
                Customer Support
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="bg-green-800 text-white p-2 rounded-full">
                  💰
                </span>
                Competitive Price
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="md:w-1/2">
            <img
              src="/src/assets/images/vegitable.jpg" 
              alt="Best Quality Grocery Shopper"
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default LandingPage;

