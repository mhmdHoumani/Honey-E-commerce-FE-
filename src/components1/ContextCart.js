import React, { useContext, useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import Navbar from "../components/NavBar";
import { navigate, useNavigate } from "react-router-dom";

const Cart = () => { 
  const { item, totalAmount } = useContext(CartContext);
  let cart = JSON.parse(localStorage.getItem("cart_products")) || [];
  // console.log(cart[0].total_qty);
  const [count, setCount] = useState(0);

  const navigate = useNavigate();


  const clearAll = () => {
    localStorage.removeItem("cart_products");
    // console.log("CARTTTTT:", localStorage.removeItem("cart_products"));
  };

  const handleClick = () => {
    navigate("/product", { replace: true });
  };

  const handleCheckout = () => {
    if (localStorage.getItem("token")) {
      navigate("/delivery-details", {
        state: { item: item, total: totalAmount },
      });
    } else {
      navigate("/login");
    }
  };
  

  useEffect(() => {
    var num = 0;
    for (let i = 0; i < item.length; i++) num += item[i].total_qty;
    console.log(num);
    setCount(num);
  }, [item]);
  if (item.length === 0) {
    return (
      <>
        <div className="container_cart">
          <header className="header_cart">
            <button className="continue-shopping-cart" onClick={handleClick}>
              <img
                src="./images/arrow.png"
                alt="arrow"
                className="arrow-icon"
              />
              <h3>go back </h3>
              {/* <button onClick={handleClick}><h3>continue shopping</h3> </button> */}
            </button>
          </header>
          <section className="main-cart-section-cart">
            <h1>shopping Cart</h1>
            <p className="total-items-cart">
              you have <span className="total-items-count">0 </span> items in
              shopping cart
            </p>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      {/* <Navbar /> */}

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{count} </span>  items in
          shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}$</span>
          </h3>
          <button
            // onClick={() =>
            //   navigate("/delivery-details", {
            //     state: { item: item, total: totalAmount },
            //   })
            // }

            onClick={handleCheckout}
          >
            checkout
          </button>
          <button className="clear-cart" onClick={clearAll}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;
