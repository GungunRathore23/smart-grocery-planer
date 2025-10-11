import { useNavigate } from "react-router-dom";
// import groceriesCard from "../data/cardData.json"; // import JSON
import riceImg from "../assets/images/rice.jpg";
import vegitableImg from "../assets/images/rice.jpg";
import Card from "./Card";


const groceriesCard = [
  { id: 1, name: "Rice", description: "Premium quality rice", image: riceImg },
  { id: 2, name: "Wheat Flour", description: "Freshly milled flour", image: vegitableImg },
  { id: 3, name: "Milk", description: "Organic dairy milk", image: riceImg },
  { id: 4, name: "Eggs", description: "Farm fresh eggs", image: riceImg },
  { id: 5, name: "Sugar", description: "Refined sugar for cooking", image: vegitableImg },
  { id: 6, name: "Salt", description: "Pure rock salt", image: riceImg },
  { id: 7, name: "Tea", description: "Premium tea leaves", image: vegitableImg },
  { id: 8, name: "Coffee", description: "Rich roasted coffee", image: vegitableImg },
  { id: 9, name: "Oil", description: "Cold-pressed vegetable oil", image: riceImg },
  { id: 10, name: "Butter", description: "Creamy dairy butter", image: vegitableImg },
  { id: 11, name: "Cheese", description: "Delicious cheese slices", image: riceImg },
  { id: 12, name: "Yogurt", description: "Fresh curd for breakfast", image: riceImg },
  { id: 13, name: "Tomato", description: "Fresh red tomatoes", image: vegitableImg },
  { id: 14, name: "Potato", description: "Organic farm potatoes", image: riceImg },
  { id: 15, name: "Onion", description: "Fresh onions for cooking", image: vegitableImg },
  { id: 16, name: "Apple", description: "Fresh red apples", image: riceImg },
  { id: 17, name: "Banana", description: "Ripe bananas full of energy", image: vegitableImg },
  { id: 18, name: "Orange", description: "Sweet juicy oranges", image: vegitableImg },
  { id: 19, name: "Mango", description: "Seasonal king of fruits", image: riceImg },
  { id: 20, name: "Cucumber", description: "Fresh cucumbers for salads", image: vegitableImg }
];

const Home = () => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    navigate("/"); // Redirect to LandingPage
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-indigo-500 text-white p-4 flex justify-between items-center">
        <h1
          className="font-bold text-lg cursor-pointer"
          onClick={() => navigate("/home")}
        >
          Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="bg-white text-indigo-500 px-4 py-1 rounded hover:bg-gray-200 transition"
        >
          Logout
        </button>
      </nav>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {groceriesCard.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
