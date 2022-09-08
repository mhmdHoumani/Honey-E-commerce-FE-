import AboutUs from "./pages/aboutUs/aboutUs";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import { Announcement } from "./components/Announcement";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Announcement />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
