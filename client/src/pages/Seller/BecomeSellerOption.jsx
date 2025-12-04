// import { useNavigate } from "react-router-dom";

// const BecomeSellerOption = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6">Become a Seller</h1>
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Existing Seller Login */}
//         <button
//           onClick={() => navigate("/seller/login")}
//           className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
//         >
//           Already have an account? Login
//         </button>

//         {/* New Seller Registration */}
//         <button
//           onClick={() => navigate("/new-seller-register")}
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           New Seller? Register
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BecomeSellerOption;

import { useNavigate } from "react-router-dom";

const BecomeSellerOption = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-3xl font-bold mb-6">Become a Seller</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Already Seller → Login */}
        <button
          onClick={() => navigate("/seller-login")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Already have an account? Login
        </button>

        {/* New Seller → Register */}
        <button
          onClick={() => navigate("/seller-register")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          New Seller? Register
        </button>
      </div>
    </div>
  );
};

export default BecomeSellerOption;
