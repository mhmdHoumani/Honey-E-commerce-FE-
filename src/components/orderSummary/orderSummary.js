import React, { useContext, useEffect, useState } from "react";
import "./orderSummary.css";
import { Button } from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";
import honeyJar from "../../Assets/Images/honeyJar.jpg";
import NotificationBar from "../notificationBar/notificationBar";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../components1/Cart";



const OrderSummary = ({sendEmail,cart,total}) => {
  console.log(cart);
  const navigate = useNavigate();
  const [note, setNote] = useState(false);
const {state}=useLocation()
console.log("STATE", state.item);
console.log(state.total);




  
  return (
    <div className="orderSummaryWrapper">
      <div className="orderSummaryForm">

        {cart.map((item)=> {
          return (

  
        <div className="summaryCard">
          <div className="summaryLeft">
            <div className="summaryTitle">{item.title}</div>
            <div className="summaryDesc">
        {item.description}
            </div>
{ item.price_1kg ?
            <div className="summaryPrice">Price: {item.price_1kg}</div>
            :
            <div className="summaryPrice">Price: {item.price_500g}</div>



}
            {item.qty_1 ?  
            <div className="summaryQuantity">Quantity: {item.qty_1}</div>
            :
            <div className="summaryQuantity">Quantity: {item.qty_500}</div>

            }
          </div>

          <div className="summaryRight">
            <img src={item.avatar} alt="" />
          </div>
        </div>
         )
      })} 

        <div className="lastSectionOS">
    

            <div className="summaryTotal">Total: {total}</div>
      
          <Button
            className="purshaseBtnOS"
            variant="contained"
            endIcon={<SendIcon />}
            onClick={(e) => {
              navigate("/");
              sendEmail(e);
              setNote(true);
            }}
          >
            Submit
          </Button>
          {note && <NotificationBar note={note} message={"Order Sent!"} />}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
