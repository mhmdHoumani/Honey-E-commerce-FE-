import "./App.css";
import Login from "./pages/login/login";
import * as React from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/aboutUs";
import Footer from "./components/footer/footer";
import SignUp from "./pages/signUp/signUp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Announcement } from "./components/Announcement";
import { Product } from "./pages/Product";
import { useState } from "react";
import { Single } from "./pages/SingleProduct/single";
import SingleProd from "./components/SingleProduct/SingleProd";

import Cart from "./components1/Cart";

export const cardNumContaxt = React.createContext()

function App() {
  const [cardNum, setCardNum] = useState(0);
  const user = localStorage.getItem('token');
  console.log("localstorage: " , user);
  return (


    <cardNumContaxt.Provider value={{cardNum, setCardNum}}>

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
                <SignUp />
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
          



          <Route
            path="/cart"
            element={
              <>
               <Navbar />
                <Cart />
              {/* <Footer/> */}

              </>
            }
          />
        </Routes>

      </BrowserRouter>
    </div>
    </cardNumContaxt.Provider>

  );
}
export default App;
