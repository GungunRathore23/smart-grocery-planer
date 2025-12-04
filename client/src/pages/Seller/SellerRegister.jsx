

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SellerRegister() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gst, setGst] = useState("");
  const navigate = useNavigate();

  // STEP 1: Check email & send OTP
  const checkAndSendOtp = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5555/api/seller/check-email",
        { email },
        { withCredentials: true }
      );

      if (res.data.exists) {
        alert("This email is already registered. Please login.");
        navigate("/seller/login");
        return;
      }

      const send = await axios.post(
        "http://localhost:5555/api/seller/send-otp",
        { email },
        { withCredentials: true }
      );

      if (send.data.success) {
        alert("OTP sent to your email!");
        setStep(2);
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to send OTP");
    }
  };

  // STEP 2: Verify OTP
  const verifyOtp = async () => {
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5555/api/seller/verify-otp",
        { email, otp },
        { withCredentials: true }
      );

      if (res.data.success) {
        alert("OTP verified!");
        setStep(3);
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "OTP verification failed");
    }
  };

  // STEP 3: Register seller
  const registerSeller = async () => {
    if (!businessName || !ownerName || !password) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5555/api/seller/register",
        {
          businessName,
          ownerName,
          password,
          email,
          phone,
          gst,
        },
        { withCredentials: true }
      );

      if (res.data.success) {
        localStorage.setItem("sellerName", res.data.seller.businessName);
        localStorage.setItem("sellerEmail", res.data.seller.email);

        alert("Seller registered successfully!");
        navigate("/seller/dashboard");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* STEP 1 */}
      {step === 1 && (
        <div className="p-8 bg-white shadow-xl rounded-xl w-[350px]">
          <h2 className="text-2xl font-bold mb-4">Enter Your Email</h2>
          <input
            type="email"
            placeholder="Business Email"
            className="w-full border p-2 rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={checkAndSendOtp}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Send OTP
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="p-8 bg-white shadow-xl rounded-xl w-[350px]">
          <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full border p-2 rounded mb-4"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            onClick={verifyOtp}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Verify OTP
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="p-8 bg-white shadow-xl rounded-xl w-[350px]">
          <h2 className="text-2xl font-bold mb-4">Complete Registration</h2>
          <input
            type="text"
            placeholder="Business Name"
            className="w-full border p-2 rounded mb-3"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Owner Name"
            className="w-full border p-2 rounded mb-3"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone (optional)"
            className="w-full border p-2 rounded mb-3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="GST (optional)"
            className="w-full border p-2 rounded mb-3"
            value={gst}
            onChange={(e) => setGst(e.target.value)}
          />
          <button
            onClick={registerSeller}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
}

export default SellerRegister;
