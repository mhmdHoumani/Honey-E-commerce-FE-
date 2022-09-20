import "./login.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Button, Box, TextField, Alert } from "@mui/material";

const Login = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();


    useEffect(() => {
      const token = localStorage.getItem("token");

      // I need to validate if the token is a valid
      if (token) {
        navigate("/");
   window.location.reload();

      }
      else{
        // props.setLogin(true)
        navigate("/login");
        

      }
    }, []);

  useEffect(() => {
  }, [])
  
  async function login(e) {
    e.preventDefault();
    setGeneralError("");

    try {
      let item = { email, password };
      let result = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      localStorage.setItem("token", JSON.stringify(result.token));
      result = await result.json();
      console.log(result);
      if (result.message) {
        setGeneralError(result.message);
      }
      else{
        localStorage.setItem("token", JSON.stringify(result.token));
        localStorage.setItem("id", JSON.stringify(result._id));
       
        // props.setLogin(false);
        navigate("/");
        window.location.reload();

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
              severity="error"
              sx={{
                height: "40px",
                transform: "scale(1.3)",
                width: "10rem",
                position: "absolute",
                top: "20%",
              }}
            >
              {generalError}
            </Alert>
          )}

          <h1>LOGO</h1>
          <h2>Please enter your email and password.</h2>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
              setGeneralError("");
            }}
            className="input"
            id="outlined-basic"
            label="Email"
            error={generalError}
            helperText={emailError}
            required
            variant="outlined"
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
              setGeneralError("");
            }}
            value={password}
            className="input"
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
            Submit
          </Button>
          <Button
            className="notMemberBtn"
            href="/signup"
            sx={{ width: "12vw", letterSpacing: "2px", color: "var(--black)" }}
          >
            Not a member? Sign up.
          </Button>
        </div>
      </Box>
      <div className="footer">Esper Bee Honey ©</div>
    </div>
  );
};

export default Login;
