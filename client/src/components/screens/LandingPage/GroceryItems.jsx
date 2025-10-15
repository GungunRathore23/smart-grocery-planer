
const GroceryItems = () => {
  return (
  <section className="py-20 bg-gray-100">
  <div className="container mx-auto px-6 md:px-16">

    {/* HEADING */}
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-gray-800">Enjoy Our Healthy And Fresh Grocery Items</h2>
    </div>

    {/* FILTER BUTTONS */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {["All Items", "Vegetables", "Meats", "Fresh Fruits", "Fresh Nuts"].map((btn, idx) => (
        <button
          key={idx}
          className="bg-green-800 text-white px-5 py-2 rounded-full hover:bg-green-900 transition-all duration-300 font-semibold"
        >
          {btn}
        </button>
      ))}
    </div>

    {/* PRODUCT CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-3xl overflow-hidden w-full max-w-xs hover:shadow-2xl transition-shadow duration-300">
        <img
          src="/src/assets/images/beef.jpg"
          alt="Beef Meat"
          className="w-full h-52 object-cover rounded-t-3xl"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">Beef Meat</h3>
          <p className="text-gray-600 font-medium">$25.00</p>
          <p className="text-yellow-500">⭐⭐⭐⭐☆</p>
          <button className="bg-green-800 text-white w-full py-2 rounded-lg hover:bg-green-900 transition-all duration-300 font-semibold">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-lg rounded-3xl overflow-hidden w-full max-w-xs hover:shadow-2xl transition-shadow duration-300">
        <img
          src="/src/assets/images/mutton.jpg"
          alt="Mutton Meat"
          className="w-full h-52 object-cover rounded-t-3xl"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">Mutton Meat</h3>
          <p className="text-gray-600 font-medium">$30.00</p>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          <button className="bg-green-800 text-white w-full py-2 rounded-lg hover:bg-green-900 transition-all duration-300 font-semibold">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-lg rounded-3xl overflow-hidden w-full max-w-xs hover:shadow-2xl transition-shadow duration-300">
        <img
          src="/src/assets/images/chicken.jpg"
          alt="Chicken Meat"
          className="w-full h-52 object-cover rounded-t-3xl"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">Chicken Meat</h3>
          <p className="text-gray-600 font-medium">$20.00</p>
          <p className="text-yellow-500">⭐⭐⭐⭐☆</p>
          <button className="bg-green-800 text-white w-full py-2 rounded-lg hover:bg-green-900 transition-all duration-300 font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default GroceryItems