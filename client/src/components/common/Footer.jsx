import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white pt-12 pb-6 mt-12">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Smart<span className="text-green-400">Gro</span>
          </h1>
          <p className="text-gray-300 text-sm leading-6">
            Your one-stop online grocery partner.  
            We bring fresh fruits, vegetables, and essentials to your doorstep with speed and care.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* ⚡ Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3 border-b border-green-600 inline-block pb-1">
            Quick Links
          </h2>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li><a href="/home" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="/categories" className="hover:text-green-400 transition">Categories</a></li>
            <li><a href="/about" className="hover:text-green-400 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-400 transition">Contact</a></li>
            <li><a href="/faq" className="hover:text-green-400 transition">FAQ</a></li>
          </ul>
        </div>

        {/* 🛒 Customer Support */}
        <div>
          <h2 className="text-xl font-semibold mb-3 border-b border-green-600 inline-block pb-1">
            Customer Support
          </h2>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400 transition">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Return Policy</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Help Center</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-3 border-b border-green-600 inline-block pb-1">
            Stay Updated
          </h2>
          <p className="text-gray-300 text-sm mb-3">
            Subscribe to get the latest deals, offers, and fresh arrivals.
          </p>

          {/* ✅ Fixed Email Subscribe Bar */}
          <form className="flex items-center w-full bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 flex-grow text-black text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-5 py-3 font-semibold hover:bg-green-700 transition rounded-r-full"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-4 space-y-2 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-green-400" /> support@smartgro.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-400" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-400" /> Indore, Madhya Pradesh
            </p>
          </div>
        </div>
      </div>

      {/* 🧾 Bottom Line */}
      <div className="mt-10 border-t border-green-800 pt-4 text-center text-gray-400 text-sm">
        © 2025 SmartGro. All rights reserved | Designed with 💚 by <span className="text-green-400 font-semibold">Gungun Rathore</span>
      </div>
    </footer>
  );
};

export default Footer;
