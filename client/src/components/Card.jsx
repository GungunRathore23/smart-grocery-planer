import { Link } from "react-router-dom";

const Card = ({item}) => {

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-48 object-cover"
        // src="rice.jpg"
        // src={riceImg}
        // src={require(`../assets/images/${item.image}`)}
       src={item.image}
        alt={item.name}
      />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h2>
        <p className="text-gray-600 text-sm mb-4">
        {item.description}
        </p>

        {/* 👇 Button me Link lagao */}
        <Link
          to="/about"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Card;
