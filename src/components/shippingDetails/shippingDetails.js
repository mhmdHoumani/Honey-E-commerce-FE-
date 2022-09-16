import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import "./shippingDetails.css";
import emailjs from "@emailjs/browser";

const ShippingDetails = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5v4e4ga",
        "template_k1wdxjf",
        form.current,
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
    e.target.reset();
  };

  return (
    <div className="wrapperForm">
      <form ref={form} onSubmit={sendEmail} className="orderSummaryFormInfo">
        <h2>Please add your shipping details.</h2>
        <TextField
        className="input1F"
          id="outlined-multiline-flexible"
          label="City"
          name="user_city"
          multiline
          maxRows={4}
          required
        />
        <TextField
        className="input2F"
          id="outlined-multiline-flexible"
          label="Street"
          multiline
          maxRows={4}
          name="user_street"
          required
        />
        <TextField
        className="input3F"
          id="outlined-multiline-flexible"
          label="Building"
          multiline
          maxRows={4}
          name="user_building"
          required
        />
        <TextField
        className="input4F"
          id="outlined-multiline-flexible"
          label="Phone Number"
          multiline
          maxRows={4}
          name="user_phone"
          required
        />
        <TextField
        className="input5F"
          id="outlined-multiline-static"
          label="More details..."
          multiline
          rows={4}
          name="user_details"
          required
        />
        <div className="lastSection">
          <button
            className="purshaseBtn"
            
          >
            Order summary
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingDetails;
