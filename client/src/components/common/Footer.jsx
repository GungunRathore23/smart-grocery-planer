
const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-8 mt-12">
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left-Brand Name */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Smarter Grocery Planner</h1>
          <p className="text-gray-200 text-sm mt-1">Plan your groceries efficiently</p>
        </div>

        {/* Right-Links or Info */}
        <div className="flex space-x-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#categories" className="hover:text-white transition-colors">Categories</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
      </div>

      {/* Bottom-Copyright */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        © 2025 Smarter Grocery Planner. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
