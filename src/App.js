import "./App.css";
import Login from "./pages/login/login";
import Navbar from "./components/NavBar";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/aboutUs";
import Footer from "./components/footer/footer";
import SignUp from "./pages/signUp/signUp.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Announcement } from "./components/Announcement";
import { Product } from "./pages/Product";
import { useState } from "react";
import { Single } from "./pages/SingleProduct/single";
import SingleProd from "./components/SingleProduct/SingleProd";

function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Routes>
          <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {/* <Announcement /> */}
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route
            path="/product"
            element={
              <>
                <Navbar />
                <Product />
                <Footer />
              </>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <>
                <Navbar />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <signUp />
              </>
            }
          />
      
        <Route
            path="/product-details"
            element={
              <>
               <Navbar />
              <Single />
              <Footer/>
              </>
             
              
            }
          />
          
        </Routes>

      </BrowserRouter>
    </div>
  );
}
export default App;
