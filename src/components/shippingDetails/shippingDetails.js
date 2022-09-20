import React, {  useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./shippingDetails.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import OrderSummary from "../orderSummary/orderSummary";

const ShippingDetails = () => {

  const [open,setOpen]=useState(true)
  const [form, setForm] = useState(null);
  const navigate = useNavigate();
  const [notify, setNotify] = useState(false);
  const [inputs, setInputs] = useState({
    user_city: "",
    user_street: "",
    user_building: "",
    user_phone: "",
    user_details: "",
  });

  const handleChange = (e)=>{
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }
  const proceedToCheckout = (e) => {
    if (inputs) {
      setForm(e);
      // navigate("/ordersummary");
      setOpen(false)
      // setNotify(true);
    } else {
      return;
    }
  };

  var sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_5v4e4ga",
          "template_k1wdxjf",
          form.target,
          "mBKdULDii8hHnYNx7"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setNotify(true);
    } catch (error) {
      console.log(error);
    }
  };

  
  // useEffect(() => {
  //   console.log(notify);
  // }, [notify]);

  return (
      <div className="wrapperForm">
      { open ? <form
        onSubmit={proceedToCheckout}
        className="orderSummaryFormInfo"
      >
        <a href="/" className="navigate">
          Back to home page
        </a>
        <h2 className="shipD">Please add your shipping details.</h2>
        <TextField
          className="input1F"
          id="outlined-multiline-flexible"
          label="City"
          name="user_city"
          multiline
          maxRows={2}
          required
          onChange={handleChange}
        />
        <TextField
          className="input2F"
          id="outlined-multiline-flexible"
          label="Street"
          multiline
          maxRows={2}
          name="user_street"
          required
          onChange={handleChange}
        />
        <TextField
          className="input3F"
          id="outlined-multiline-flexible"
          label="Building"
          multiline
          maxRows={2}
          name="user_building"
          required
          onChange={handleChange}
        />
        <TextField
          className="input4F"
          id="outlined-multiline-flexible"
          label="Phone Number"
          type="tel"
          multiline
          maxRows={2}
          name="user_phone"
          required
          onChange={handleChange}
        />
        <TextField
          className="input5F"
          id="outlined-multiline-static"
          label="More details..."
          multiline
          rows={4}
          name="user_details"
          required
          onChange={handleChange}
        />
        <div className="lastSection">
          <button className="purshaseBtn">Order Summary</button>
        </div>
      </form> : 
      <OrderSummary sendEmail={sendEmail} />}
    </div>
  );
};

export default ShippingDetails;

// {
//   form && <Navigate to="/ordersummary" />;
// }
