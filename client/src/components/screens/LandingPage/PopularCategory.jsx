
const PopularCategory = () => {

    const categories = [
    { id: 1, name: "Vegetables", image: "/src/assets/images/fruits.jpg" },
    { id: 2, name: "Fruits", image: "/src/assets/images/snacks.jpg" },
    { id: 3, name: "Spices", image: "/src/assets/images/dairy.jpg" },
    { id: 4, name: "Meat", image: "/src/assets/images/bakery.jpg" },
  ];

  return (
    <div>   <section className="py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Popular Categories</h2>
          <p className="text-gray-500 text-lg">Shop your daily needs with ease</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 md:px-20 justify-items-center">
          {categories.map((item) => (
            <div
              key={item.id}
              className="relative bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group w-full max-w-xs"
            >
              {/* IMAGE (no title overlay) */}
              <div className="h-52 w-full overflow-hidden relative rounded-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                />
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 rounded-2xl"></div>
              </div>

              {/* NAME BELOW IMAGE */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section></div>
  )
}

export default PopularCategory