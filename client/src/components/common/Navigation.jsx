//================================ New

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import {
  FaAppleAlt,
  FaBroom,
  FaCartPlus,
  FaChevronDown,
  FaCookieBite,
  FaHeart,
  FaMicrophone,
  FaSearch,
  FaShoppingCart,
  FaSpa,
} from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [supplierDropdownOpen, setSupplierDropdownOpen] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem("userData"));
  const userName = storedUser?.username?.split(" ")[0];

  useEffect(() => {
    const user = localStorage.getItem("userData");
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <nav className="bg-green-950 text-white px-6 py-3 m-3 flex justify-between items-center shadow-lg z-30 fixed w-[96%] top-0 left-[2%] rounded-2xl">
      {/* 🌿 SmartGro Logo */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <FaCartPlus className="text-green-400 text-3xl" />
        <h1 className="text-2xl font-bold tracking-wide">
          Smart<span className="text-green-400">Gro</span>
        </h1>
      </div>

      {/* 📱 Hamburger Icon */}
      <HiMenuAlt3
        className="text-3xl md:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* 🧭 Main Navigation */}
      <ul className="hidden md:flex space-x-8 text-[1rem] font-medium relative">
        <li>
          <Link to="/home" className="hover:text-green-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-green-300">
            About
          </Link>
        </li>

        {/* 🍏 Categories */}
        <li
          className="relative group cursor-pointer"
          onMouseEnter={() => setCategoryOpen(true)}
          onMouseLeave={() => setCategoryOpen(false)}
        >
          <div className="flex items-center space-x-1 hover:text-green-300">
            <span>Categories</span>
            <FaChevronDown className="text-xs mt-1" />
          </div>

          {categoryOpen && (
            <div className="absolute top-10 left-0 bg-white text-green-900 rounded-xl shadow-2xl w-[900px] p-6 grid grid-cols-4 gap-6 z-50">
              {/* Categories Content */}
              {/* Fruits & Veg */}
              <div>
                <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <FaAppleAlt className="text-green-600" /> Fruits & Vegetables
                </h3>
                <ul className="text-sm space-y-1">
                  <li className="hover:text-green-600 cursor-pointer">
                    Fresh Fruits
                  </li>
                  <li className="hover:text-green-600 cursor-pointer">
                    Green Vegetables
                  </li>
                  <li className="hover:text-green-600 cursor-pointer">
                    Organic Items
                  </li>
                  <li className="hover:text-green-600 cursor-pointer">
                    Juices
                  </li>
                </ul>
              </div>

              {/* Bakery & Snacks */}
              <div>
                <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <FaCookieBite className="text-yellow-500" /> Bakery & Snacks
                </h3>
                <ul className="text-sm space-y-1">
                  <li className="hover:text-green-600 cursor-pointer">
                    Breads
                  </li>
                  <li className="hover:text-green-600 cursor-pointer">
                    Cakes & Muffins
                  </li>
                  <li className="hover:text-green-600 cursor-pointer">
                    Biscuits & Chips
                  </li>
                  <li className="hover:text-green-600 cursor-pointer">
                    Namkeen
                  </li>
                </ul>
              </div>

              {/* Personal Care */}
              <div>
                <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <FaSpa className="text-pink-500" /> Personal Care
                </h3>
                <ul className="text-sm space-y-1">
                  <li className="hover:text-green-600 cursor-pointer">
                    Hair Care
                  </li>
                  <li className="hover:text-green-600 cursor-pointer">
                    Skin Care
                  </li>
                  <li className="hover:text-green-600 cursor-pointer">
                    Oral Care
                  </li>
                  <li className="hover:text-green-600 cursor-pointer">
                    Fragrances
                  </li>
                </ul>
              </div>

              {/* Home & Essentials */}
              <div>
                <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <FaBroom className="text-blue-500" /> Home & Essentials
                </h3>
                <ul className="text-sm space-y-1">
                  <li className="hover:text-green-600 cursor-pointer">
                    Cleaning Supplies
                  </li>
                  <li className="hover:text-green-600 cursor-pointer">
                    Laundry
                  </li>
                  <li className="hover:text-green-600 cursor-pointer">
                    Kitchen Essentials
                  </li>
                  <li className="hover:text-green-600 cursor-pointer">
                    Storage
                  </li>
                </ul>
              </div>
            </div>
          )}
        </li>

        <li>
          <Link to="/service" className="hover:text-green-300">
            Service
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-green-300">
            Contact
          </Link>
        </li>
      </ul>

      {/* 🔍 Search & Icons */}
      <div className="hidden md:flex items-center space-x-6 relative">
        {/* Search */}
        <div className="relative">
          <div className="flex items-center bg-white rounded-full px-3 py-1 w-64 shadow-inner">
            <FaSearch className="text-green-800 text-lg mr-2" />
            <input
              type="text"
              placeholder="Search groceries..."
              className="flex-1 text-black bg-transparent outline-none"
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setTimeout(() => setSearchOpen(false), 150)}
            />
            <FaMicrophone className="text-green-700 text-lg cursor-pointer" />
          </div>

          {searchOpen && (
            <div className="absolute bg-white text-green-900 mt-2 rounded-xl shadow-2xl w-72 p-3 z-50">
              <p className="font-semibold text-sm mb-2">Popular Searches</p>
              <ul className="space-y-1 text-sm">
                <li className="hover:bg-green-100 px-2 py-1 rounded cursor-pointer">
                  Organic Apples
                </li>
                <li className="hover:bg-green-100 px-2 py-1 rounded cursor-pointer">
                  Milk & Dairy
                </li>
                <li className="hover:bg-green-100 px-2 py-1 rounded cursor-pointer">
                  Snacks & Biscuits
                </li>
                <li className="hover:bg-green-100 px-2 py-1 rounded cursor-pointer">
                  Skin Care
                </li>
                <li className="hover:bg-green-100 px-2 py-1 rounded cursor-pointer">
                  Vegetables
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Wishlist */}
        <div className="relative cursor-pointer hover:scale-110 transition-transform">
          <FaHeart className="text-white text-2xl hover:text-red-500" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            2
          </span>
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer hover:scale-110 transition-transform">
          <FaShoppingCart className="text-white text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>

        {/* Become Supplier Dropdown */}
        <div className="relative">
          <button
            onClick={() => setSupplierDropdownOpen(!supplierDropdownOpen)}
            className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-1"
          >
            Become a Supplier
            <FaChevronDown className="text-xs" />
          </button>

          {supplierDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-green-900 rounded-lg shadow-xl p-2 z-50">
              <ul className="flex flex-col text-sm">
                <li>
                  <Link
                    to="/seller-register"
                    className="hover:bg-green-100 px-3 py-2 block rounded"
                  >
                    Register as Supplier
                  </Link>
                </li>
                <li>
                  <Link
                    to="/seller-login"
                    className="hover:bg-green-100 px-3 py-2 block rounded"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          {storedUser ? (
            <>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white font-bold text-lg hover:bg-green-500 transition-colors">
                  {userName?.charAt(0).toUpperCase()}
                </div>
              </div>

              {isOpen && (
                <div className="absolute right-0 bg-white text-green-900 rounded-lg mt-2 w-48 shadow-xl p-2 z-50">
                  <ul className="flex flex-col text-sm">
                    <li className="hover:bg-green-100 px-3 py-2 cursor-pointer">
                      👤 View Profile
                    </li>
                    <li className="hover:bg-green-100 px-3 py-2 cursor-pointer">
                      📦 My Orders
                    </li>
                    <li className="hover:bg-green-100 px-3 py-2 cursor-pointer">
                      ❤️ Wishlist
                    </li>
                    <li className="hover:bg-green-100 px-3 py-2 cursor-pointer">
                      🧾 My Subscriptions
                    </li>
                    <li className="hover:bg-green-100 px-3 py-2 cursor-pointer">
                      💳 Payment Methods
                    </li>
                    <li className="hover:bg-green-100 px-3 py-2 cursor-pointer">
                      ⚙️ Settings
                    </li>

                    {/* Logout */}
                    <li
                      onClick={() => {
                        localStorage.removeItem("userData");
                        Cookies.remove("accessToken");
                        Cookies.remove("refreshToken");
                        navigate("/");
                      }}
                      className="hover:bg-green-100 px-3 py-2 cursor-pointer text-red-600"
                    >
                      🚪 Logout
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link to="/login">
              <button className="cursor-pointer bg-white text-green-950 font-semibold px-4 py-1.5 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-200">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 bg-green-950 w-full flex flex-col items-center space-y-4 py-4 md:hidden">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {storedUser ? (
            <li
              onClick={() => {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("userData");
                navigate("/login");
              }}
            >
              Logout
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
