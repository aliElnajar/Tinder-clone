import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Chat = ({ name, message, img, timeStamp }) => {
  return (
    <Link
      to={`/chats/${name.toLowerCase()}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Stack
        alignItems="center"
        justifyContent="space-between"
        position="relative"
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          <ListItem sx={{ pt: "0 ", height: "70px" }}>
            <ListItemAvatar>
              <Avatar mr="5px" src={img}></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography fontSize="20px" fontWeight="600" variant="h6">
                  {name}
                </Typography>
              }
              secondary={
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  component="span"
                >
                  <Typography variant="span" color={"Gray"}>
                    {message}
                  </Typography>
                  <Typography variant="span" color={"lightgray"}>
                    {timeStamp}
                  </Typography>
                </Stack>
              }
            />
          </ListItem>
          <Divider variant="inset" />
        </List>
      </Stack>
    </Link>
  );
};

export default Chat;
