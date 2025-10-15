import greenbackground from "../../../assets/images/greenbackground.jpg";

const Hero = () => {
  return (
    <div>      <section className="flex flex-col relative h-[100vh] w-full justify-center items-center text-center px-4 py-32 bg-gray-100">
            <img
              src={greenbackground}
              alt="greenbackground"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
    
            <div className="relative z-20">
              <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
                Smarter Grocery Planner
              </h1>
              <p className="text-lg text-white mb-8 max-w-xl mx-auto drop-shadow-md">
                Plan your groceries efficiently, save time, and never forget what you need.
              </p>
              <div className="flex space-x-4 justify-center">
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-green-950 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition-all duration-300 font-semibold shadow-md"
                >
                  Get Started
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-transparent text-white px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-green-950 transition-all duration-300 font-semibold shadow-md"
                >
                  Login
                </button>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Hero