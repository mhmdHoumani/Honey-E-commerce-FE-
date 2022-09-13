import React, { useState } from "react";
import "./signUp.css";
import { Button, Box, TextField, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     // I need to validate if the token is a valid
  //     if (token) {
  //       useNavigate("/");
  //     }
  //   }, []);

  async function login(e) {
    e.preventDefault();
    setGeneralError("");
    setEmailError("");
    setPasswordError("");

    try {
      let item = {name ,email, password };
      let result = await fetch("http://localhost:5000/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      localStorage.setItem("token", JSON.stringify(result.token));
      result = await result.json();
      console.log(result.token);
      if (result.message) {
        setGeneralError(result.message);
      }
      else{
        localStorage.setItem("token", JSON.stringify(result.token));
        localStorage.setItem("id", JSON.stringify(result._id));
        return navigate("/");

      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="loginContainer">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="loginContainerform">
          {generalError && (
            <Alert
              className="err"
              severity="error"
              sx={{
                height: "40px",
                transform: "scale(1.3)",
                width: "12rem",
                position: "absolute",
                top: "3%",
                boxShadow: "4",
              }}
            >
              {generalError}
            </Alert>
          )}
          <h2>Please enter your email and password.</h2>
          <TextField
            onChange={(e) => {
              setName(e.target.value);
              setGeneralError("");
            }}
            className="input1"
            id="outlined-basic"
            label="Name"
            error={generalError}
            helperText={emailError}
            required
            variant="outlined"
            value = {name}
          />
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
              setGeneralError("");
            }}
            className="input2"
            id="outlined-basic"
            label="Email"
            error={generalError}
            helperText={emailError}
            required
            variant="outlined"
            value = {email}
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
              setGeneralError("");
            }}
            value={password}
            className="input3"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
            type="password"
            error={generalError}
            helperText={passwordError}
          />
          <Button
            className="loginBtn"
            onClick={login}
            variant="outlined"
            sx={{
              height: "4vh",
              width: "10vw",
              marginTop: "40px",
              fontWeight: "600",
              color: "var(--white)",
              backgroundColor: "var(--black)",
            }}
          >
            Sign Up
          </Button>
          <Button
            className="notMemberBtn"
            href="#text-buttons"
            onClick={() => navigate("/login")}
            sx={{ width: "14vw", letterSpacing: "2px", color: "var(--black)" }}
          >
            Already a member? Log in.
          </Button>
        </div>
      </Box>
      <div className="footer">Esper Bee Honey ©</div>
    </div>
  );
};

export default SignUp;
