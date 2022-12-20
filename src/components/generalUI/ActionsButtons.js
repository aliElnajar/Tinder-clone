import { ButtonGroup, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import StarRateIcon from "@mui/icons-material/StarRate";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import "../TinderCards.css";
const ActionButtons = () => {
  return (
    <ButtonGroup
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        size: "large",
        position: "fixed",
        bottom: "10vh",
        width: "100%",
        size: "large",
      }}
    >
      <IconButton className="btn">
        <ReplayIcon fontSize="large" color="warning" />
      </IconButton>
      <IconButton className="btn">
        <CloseIcon fontSize="large" color="error" />
      </IconButton>
      <IconButton className="btn" >
        <StarRateIcon fontSize="large" color="success" />
      </IconButton>
      <IconButton className="btn" >
        <FavoriteIcon fontSize="large" color="primary" />
      </IconButton>
      <IconButton className="btn" >
        <FlashOnIcon fontSize="large" color="secondary" />
      </IconButton>
    </ButtonGroup>
  );
};

export default ActionButtons;
