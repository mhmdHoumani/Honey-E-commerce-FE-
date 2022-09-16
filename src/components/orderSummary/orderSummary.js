import React from "react";
import "./orderSummary.css";
import { Button } from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";
import honeyJar from "../../Assets/Images/honeyJar.jpg";


const OrderSummary = () => {
  return (
    <div className="orderSummaryWrapper">
      <div className="orderSummaryForm">
        <div className="summaryCard">
          <div className="summaryLeft">
            <div className="summaryTitle">Wild Honey</div>
            <div className="summaryDesc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo praesentium porro assumenda facilis magnam ratione,
            </div>

            <div className="summaryPrice">Price: 10$</div>
            <div className="summaryQuantity">Quantity: x2</div>
          </div>

          <div className="summaryRight">
            <img src={honeyJar} alt="" />
          </div>
        </div>
        <div className="summaryCard">
          <div className="summaryLeft">
            <div className="summaryTitle">Wild Honey</div>
            <div className="summaryDesc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo praesentium porro assumenda facilis magnam ratione,
            </div>

            <div className="summaryPrice">Price: 10$</div>
            <div className="summaryQuantity">Quantity: x2</div>
          </div>

          <div className="summaryRight">
            <img src={honeyJar} alt="" />
          </div>
        </div>
        <div className="summaryCard">
          <div className="summaryLeft">
            <div className="summaryTitle">Wild Honey</div>
            <div className="summaryDesc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo praesentium porro assumenda facilis magnam ratione,
            </div>

            <div className="summaryPrice">Price: 10$</div>
            <div className="summaryQuantity">Quantity: x2</div>
          </div>

          <div className="summaryRight">
            <img src={honeyJar} alt="" />
          </div>
        </div>
          <div className="lastSectionOS">
            <div className="summaryTotal">Total: 50$</div>
            <Button
              className="purshaseBtnOS"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Submit
            </Button>
          </div>
      </div>
    </div>
  );
};

export default OrderSummary;
