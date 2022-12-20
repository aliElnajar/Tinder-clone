import { useState } from "react";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Box, TextField, Typography, FormHelperText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Error from "../components/generalUI/Error";
import { LoadingButton } from "@mui/lab";
const Login = ({ auth }) => {
  const [signIn, setSignIn] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState({ active: false, msg: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const signupFn = async (em, pw) => {
    setLoading(true);
    try {
      if (signIn) {
        await signInWithEmailAndPassword(auth, em, pw);
      } else {
        await createUserWithEmailAndPassword(auth, em, pw);
      }
      navigate("/");
    } catch (error) {
      setError({ active: true, msg: error.message });
    }
    setLoading(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signupFn(emailValue, passwordValue);
    setEmailValue("");
    setPasswordValue("");
  };

  return (
    <Box
      sx={{
        width: { md: "40vw", xs: "60vw" },
        m: "30px auto",
        height: "60vh",
        textAlign: "center",
      }}
    >
      {error.active ? <Error error={error} setError={setError} /> : null}
      <Typography variant="h6" color="error">
        {signIn ? "Sign in" : "Sign Up"}
      </Typography>
      <form onSubmit={submitHandler} className="form_ctrl">
        <TextField
          id="em"
          label="email"
          size="medium"
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <TextField
          id="pw"
          label="password"
          type="password"
          size="medium"
          helperText="Do not share it with anyone"
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <LoadingButton
          loading={loading}
          type="submit"
          variant="contained"
          color="error"
          disabled={!emailValue || !passwordValue}
        >
          {signIn ? "sign in" : "submit and log in"}
        </LoadingButton>
      </form>
      <FormHelperText>
        {signIn ? "Dont have an account yet?" : "Already have an account?"}
      </FormHelperText>
      <LoadingButton
        loading={loading}
        variant="outlined"
        color="error"
        onClick={() => setSignIn(!signIn)}
      >
        {signIn ? "sign up" : "sign in"}
      </LoadingButton>
    </Box>
  );
};

export default Login;
