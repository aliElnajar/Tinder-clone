import { Alert, AlertTitle } from "@mui/material";
import { useEffect } from "react";

const Error = ({ error, setError }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setError({ active: false, msg: "" });
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {error.msg} — <strong>try again!</strong>
    </Alert>
  );
};

export default Error;
