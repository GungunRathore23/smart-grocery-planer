import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SellerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginSeller = async () => {
    // API call
    // On success:
    localStorage.setItem("sellerName", "Demo Seller");
    localStorage.setItem("sellerEmail", email);
    navigate("/seller-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white shadow-xl rounded-xl w-[350px]">
        <h2 className="text-2xl font-bold mb-4">Seller Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={loginSeller}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default SellerLogin;
