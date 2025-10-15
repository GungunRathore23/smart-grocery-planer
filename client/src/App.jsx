import { Route, Routes, useLocation } from "react-router-dom";

import AdminDashboard from "./components/Admin/Dashboard/AdminDashboard";
import Card from "./components/common/Card";
import Footer from "./components/common/Footer";
import Navigation from "./components/common/Navigation";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";

function App() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/admin" || location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavFooter && <Navigation />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideNavFooter && <Footer />}
    </>

  );
}

export default App;

