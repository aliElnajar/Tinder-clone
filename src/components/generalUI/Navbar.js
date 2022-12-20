import { Stack, IconButton } from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import ForumIcon from "@mui/icons-material/Forum";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
const Navbar = ({ auth, authenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const signoutHandler = async () => {
    await signOut(auth);
  };
  return (
    <Stack
      direction="row"
      padding={2}
      mx="20px"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #f9f9f9"
      sx={{ opacity: authenticated ? "1" : "0" }}
    >
      {location.pathname !== "/" ? (
        <IconButton
          size="large"
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIosIcon sx={{ height: "40px", width: "40px" }} />
        </IconButton>
      ) : (
        <IconButton size="large" onClick={signoutHandler}>
          <PersonRemoveIcon sx={{ height: "40px", width: "40px" }} />
        </IconButton>
      )}
      <Link to="/">
        <img
          src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
          alt="logo"
          style={{ width: "50px", height: "50px" }}
        />
      </Link>
      <Link to="/chats">
        <IconButton size="large">
          <ForumIcon sx={{ height: "40px", width: "40px" }} />
        </IconButton>
      </Link>
    </Stack>
  );
};

export default Navbar;
