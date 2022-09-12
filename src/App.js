import './App.css';
import Login from './pages/login/login';
import Navbar from "./components/NavBar";
import Home from "./pages/home/Home";
import AboutUs from './pages/aboutUs/aboutUs';
import Footer from './components/footer/footer';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Announcement } from "./components/Announcement";
import { Product } from "./pages/Product";
import { useState } from 'react';


function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">



     {/* <AboutUs/> */}
    
      <BrowserRouter>
      
        {/* <Announcement /> */}
        {!login && <Navbar />}

        <Routes>
          
         <Route path="/login" element={<Login  setLogin={setLogin}/> } />
         <Route path="*" element={<Navigate to="/" replace/> } />
         
         <Route path="/signup" element={<signUp/> } />

          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          
        </Routes>
   <Footer/>
        
      </BrowserRouter>

     



    </div>
  );
}

export default App;
