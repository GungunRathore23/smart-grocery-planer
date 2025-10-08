import { useState } from "react";
import Notfound from "./components/Notfound";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Welcome/> */}
     <Notfound/>
    </div>
  );
}

export default App;
