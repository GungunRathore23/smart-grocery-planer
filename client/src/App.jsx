import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)} // input value update
      />
      <button onClick={() => alert(name)}>Submit</button> {/* button click pe alert */}
    </div>
  );
}

export default App;
