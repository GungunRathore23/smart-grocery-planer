import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    // <nav className="bg-indigo-500 text-white px-6 py-4 flex justify-between items-center shadow-lg z-10">
        <nav className="bg-green-800 text-white px-6 py-4 flex justify-between items-center shadow-lg z-30 fixed w-full top-0 left-0">
  
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
      <button className="cursor-pointer">login</button></Link>
    </nav>
  );
};

export default Navigation;
