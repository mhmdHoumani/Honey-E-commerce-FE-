import React, { useContext } from "react";
import { CartContext } from "./Cart";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const Items = ({
  _id,
  description,
  title,
  avatar,
  qty_500,
  qty_1,
  price_1kg,
  price_500g,
}) => {
  const { increment, decrement } = useContext(CartContext);

  const removeFromCart = (id) => {
    let products_array = JSON.parse(localStorage.getItem("cart_products"));
    products_array = products_array.filter((ele) => {
      return ele._id != id;
    });
    localStorage.setItem("cart_products", JSON.stringify(products_array));
  };

  return (
    <>
      {qty_1 != 0 && (
        <>
          <div className="items-info">
            <div className="product-img">
              <img src={avatar} alt={title} />
            </div>

            <div className="title">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>

            <div className="add-minus-quantity">
              {
                <i
                  className="fas fa-minus minus"
                  style={{ color: "red" }}
                  onClick={() => decrement(_id)}
                ></i>
              }
              <input style={{color:"black", fontSize:"30px", fontWeight:"600"}} type="text" placeholder={qty_1} />
              <i className="fas fa-plus add" onClick={() => increment(_id)}></i>
            </div>

            <div className="price">
              <h3>{qty_1 * price_1kg}$</h3>
            </div>

            <div className="remove-item">
              {/* <i
            className="fas fa-trash-alt remove"
            onClick={() => removeFromCart(_id)}
          ></i> */}
              <Tooltip onClick={() => removeFromCart(_id)}>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>

          <hr />
        </>
      )}
      {qty_500 != 0 && (
        <>
          <div className="items-info">
            <div className="product-img">
              <img src={avatar} alt={title} />
            </div>

            <div className="title">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>

            <div className="add-minus-quantity">
              {
                <i
                  className="fas fa-minus minus"
                  style={{ color: "red" }}
                  onClick={() => decrement(_id)}
                ></i>
              }
              <input type="text" placeholder={qty_500}  style={{color:"black", fontSize:"30px", fontWeight:"600"}} />
              <i className="fas fa-plus add" onClick={() => increment(_id)}></i>
            </div>

            <div className="price">
              <h3>{qty_500 * price_500g}$</h3>
            </div>

            <div className="remove-item">
              {/* <i
            className="fas fa-trash-alt remove"
            onClick={() => removeFromCart(_id)}
          ></i> */}
              <Tooltip onClick={() => removeFromCart(_id)}>
                <IconButton>
                  <DeleteIcon />
                </IconButton> 
              </Tooltip>
            </div>
          </div>

          <hr />
        </>
      )}
    </>
  );
};

export default Items;
