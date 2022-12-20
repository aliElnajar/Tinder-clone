import { useEffect, useState } from "react";
import { Avatar, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import "./chatScreen.css";
import SendingMsgInput from "./SendingMsgInput";
import database from "./helpers/Firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const ChatScreen = () => {
  const [newMessage, setNewMessage] = useState("");
  const { person } = useParams();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const unsubscribe = database
      .collection(`${person}`)
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs
            .map((item) => item.data())
            .sort((a, b) => a.time.seconds - b.time.seconds)
        )
      );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (newMessage === "") return;

    const addMsg = async () => {
      await addDoc(collection(database, `${person}`), {
        message: newMessage,
        time: Timestamp.fromDate(new Date()),
      });
    };
    addMsg();
  }, [newMessage]);
 
  return (
    <div className="chatScreen">
      <Typography
        color={"gray"}
        textTransform="uppercase"
        px={2}
        pb={4}
        textAlign="center"
      >
        You have matched with {person} on 10/12/2022
      </Typography>
      {messages.map((message, i) =>
        message.sender ? (
          <div className="chatScreen_message" key={i}>
            <Avatar src={message.url} alt={message.sender} />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message" key={i}>
            <p className="chatScreen_text chatScreen_selfMessage">
              {message.message}
            </p>
          </div>
        )
      )}
      <SendingMsgInput setNewMessage={setNewMessage} />
    </div>
  );
};

export default ChatScreen;
