import "./chatScreen.css";
import { useRef } from "react";
const SendingMsgInput = ({ setNewMessage }) => {
  const textRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const messageValue = textRef.current.value;
    setNewMessage(messageValue);
    textRef.current.value = "";
  };

  return (
    <div>
      <form className="chatScreen_input" onSubmit={submitHandler}>
        <input
          className="chatScreen_inputfield"
          placeholder="type a message..."
          type="text"
          ref={textRef}
        />
        <button className="chatScreen_btn" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default SendingMsgInput;
