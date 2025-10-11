import { Route, Routes } from "react-router-dom";

import Card from "./components/Card";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Login from "./components/login";
import Navigation from "./components/Navigation";
import NotFound from "./components/Notfound";
import Signup from "./components/Signup";

function App() {
  return (
<>
    <Navigation/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Card" element={<Card/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>

      </>

  );
}

export default App;

