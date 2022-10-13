import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Film from "./components/Film";
import { useState } from "react";
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <div className="App">
      <Navbar isScrolled={isScrolled} />
      <Header setIsScrolled={setIsScrolled} />
      <Film />
    </div>
  );
}

export default App;
