import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    // <nav className="bg-green-950 text-white px-8 py-4 m-3 flex justify-between items-center shadow-lg z-30 fixed w-[96%] top-0 left-[2%] rounded-2xl">
    <nav className="bg-green-950 text-white px-8 py-1 m-3 flex justify-between items-center shadow-lg z-30 fixed w-[96%] top-0 left-[2%] rounded-2xl">

      {/* Brand / Logo */}
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/home")}
      >
        Grocery
      </h1>

      {/* Menu Items */}
      <ul className="flex space-x-6">
        <li>
          <Link to="/home" className="hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/categories" className="hover:text-gray-200">
            Categories
          </Link>
        </li>
        <li>
          <Link to="/service" className="hover:text-gray-200">
            Service
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </li>
        
      </ul>

      <Link to="/login">
  <button className="cursor-pointer bg-white text-green-950 font-semibold px-3 py-1.5 rounded-lg hover:bg-green-800 hover:text-white transition-all duration-200">
    Login
  </button>
</Link>

    </nav>
  );
};

export default Navigation;
