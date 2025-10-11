import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white text-blue-600 text-center px-4">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-4">Oops! Page not found</h2>
      <p className="text-lg mb-6">
        The page you are looking for does not exist. 😔
      </p>
      <button
        onClick={() => navigate("/")} // Go back to LandingPage
        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
