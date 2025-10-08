import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white text-blue-600 text-center">
      <h1 className="text-5xl font-bold mb-4 animate-fade-in">
        Welcome to your personal grocery assistant!
      </h1>
      <p className="text-lg mb-6">
        Save time, reduce waste, and shop smart with <b>Smart Grocery Planner</b>.
      </p>
      <button
        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        onClick={() => alert("You clicked Continue!")}
      >
        Continue →
      </button>
    </div>
  );
};

export default Welcome;


