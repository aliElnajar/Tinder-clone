import Chat from "../components/Chat";
import { Box } from "@mui/material";
const Chats = () => {
  return (
    <Box mt="5vh" width="600px" mx="auto">
      <Chat
        name="ellen"
        message="i'm good thanks for asking"
        timeStamp="35 minutes ago"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjyfjXrynmvHIHeLoC5Ly7dlTZjzHIsEpWTLO8YZB4UZgLGqk-FNtn&s"
      />
      <Chat
        name="sarah"
        message="hey! how are you"
        timeStamp="1 day ago"
        img="https://media1.popsugar-assets.com/files/thumbor/Cv98VNQ_I5yCE_SzWuJoVRtUWas/0x91:2538x2629/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/12/787/n/1922398/77e61f555e443b91992a44.65041008_/i/Julia-Louis-Dreyfus.jpg"
      />
      <Chat
        name="kristen"
        message="sure,see you there"
        timeStamp="1 week ago"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1yRLmifCGcvLebghmK6D4tKGgRRn2hrcU9GJeYca0cc4CtG0KHw_JCzcc9OtWV2rEmkE&usqp=CAU"
      />
    </Box>
  );
};

export default Chats;
