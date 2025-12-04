// import { Route, Routes, useLocation } from "react-router-dom";

// import AdminDashboard from "./components/Admin/Dashboard/AdminDashboard";
// import ProtectedRoute from "./components/auth/protectedRoute";
// import Card from "./components/common/Card";
// import Footer from "./components/common/Footer";
// import Navigation from "./components/common/Navigation";
// import Dashboard from "./pages/Dashboard";
// import LandingPage from "./pages/LandingPage";
// import Login from "./pages/Login";
// import NotFound from "./pages/NotFound";
// import Signup from "./pages/Signup";
// import EmailVerify from "./pages/verifyEmail";

// // ⭐ Seller Pages
// import SellerLanding from "./pages/Seller/SellerLanding";
// import SellerRegister from "./pages/Seller/SellerRegister";
// import SellerDashboard from "./pages/Seller/SellerDashboard";

// // 🆕 New Seller Flow Pages
// import BecomeSellerOption from "./pages/Seller/BecomeSellerOption"; // Correct filename
// import SellerLogin from "./pages/Seller/SellerLogin"; // Must exist
// // NewSellerRegister can reuse SellerRegister.jsx or create separate if needed

// function App() {
//   const location = useLocation();

//   const hideNavFooter =
//     location.pathname === "/admin" ||
//     location.pathname === "/login" ||
//     location.pathname === "/signup" ||
//     location.pathname === "/dashboard" ||
//     location.pathname === "/become-supplier" ||
//     location.pathname === "/seller-register" ||
//     location.pathname === "/seller-dashboard" ||
//     location.pathname === "/become-seller-option" ||
//     location.pathname === "/seller-login";

//   return (
//     <>
//       {!hideNavFooter && <Navigation />}

//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/verify-email/:id" element={<EmailVerify />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/Card" element={<Card />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/seller-dashboard" element={<SellerDashboard />} />

//         {/* ⭐ Seller Routes */}
//         <Route path="/become-supplier" element={<SellerLanding />} />
//         <Route path="/seller-register" element={<SellerRegister />} />

//         {/* 🆕 New Seller Flow */}
//    <Route path="/become-seller-option" element={<BecomeSellerOption />} />

//         <Route path="/seller-login" element={<SellerLogin />} />

//         {/* Protected Dashboard */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       {!hideNavFooter && <Footer />}
//     </>
//   );
// }

// export default App;

import { Route, Routes, useLocation } from "react-router-dom";

import AdminDashboard from "./components/Admin/Dashboard/AdminDashboard";
import ProtectedRoute from "./components/auth/protectedRoute";
import Card from "./components/common/Card";
import Footer from "./components/common/Footer";
import Navigation from "./components/common/Navigation";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import EmailVerify from "./pages/verifyEmail";

// ⭐ Seller Pages
import SellerLanding from "./pages/Seller/SellerLanding";
import SellerRegister from "./pages/Seller/SellerRegister";
import SellerDashboard from "./pages/Seller/SellerDashboard";
import BecomeSellerOption from "./pages/Seller/BecomeSellerOption";
import SellerLogin from "./pages/Seller/SellerLogin";

function App() {
  const location = useLocation();

  const hideNavFooter =
    location.pathname === "/admin" ||
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/become-supplier" ||
    location.pathname === "/seller-register" ||
    location.pathname === "/seller-dashboard" ||
    location.pathname === "/become-seller-option" ||
    location.pathname === "/seller-login";

  return (
    <>
      {!hideNavFooter && <Navigation />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email/:id" element={<EmailVerify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />

        {/* Seller Routes */}
        <Route path="/become-supplier" element={<BecomeSellerOption />} />
        <Route path="/seller-register" element={<SellerRegister />} />
        <Route path="/seller-login" element={<SellerLogin />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideNavFooter && <Footer />}
    </>
  );
}

export default App;
