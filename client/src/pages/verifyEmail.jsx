import axios from "axios";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

// Email Verification UI Component
export default function EmailVerify() {
  const [status, setStatus] = useState("loading"); // loading | success | error
  const [message, setMessage] = useState("");

  // Extract ID from URL
  const userId = window.location.pathname.split("/").pop();

  useEffect(() => {
    const verifyEmail = async () => {
  try {
    const res = await axios.get(
      `http://localhost:5555/api/userAuth/verify-email/${userId}`
    );

    setStatus("success");
    setMessage(res.data.message || "Email verified successfully!");
  } catch (error) {
    setStatus("error");
    setMessage(error.response?.data?.message || "Invalid or expired verification link.");
  }
};


    verifyEmail();
  }, [userId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white shadow-xl rounded-2xl p-10 max-w-md text-center"
      >
        {status === "loading" && (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="animate-spin w-12 h-12" />
            <h2 className="text-xl font-semibold">Verifying your email...</h2>
            <p className="text-gray-500">Please wait a moment</p>
          </div>
        )}

        {status === "success" && (
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="text-green-600 w-16 h-16" />
            <h2 className="text-2xl font-bold text-green-600">Email Verified!</h2>
            <p className="text-gray-700">{message}</p>
            <a
              href="/login"
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700 transition"
            >
              Go to Login
            </a>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center gap-4">
            <XCircle className="text-red-600 w-16 h-16" />
            <h2 className="text-2xl font-bold text-red-600">Verification Failed</h2>
            <p className="text-gray-700">{message}</p>
            <a
              href="/"
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-xl shadow hover:bg-red-700 transition"
            >
              Back to Home
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
}
