import { useState, React  } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import ChatBox from "./components/ChatBox";
import ActionInput from "./components/ActionInput";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const containerRef = useRef(null);

  const response =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur mollitia assumenda natus maiores? Reiciendis alias cupiditate cumque nostrum fugit veritatis quod. Quibusdam quasi magnam culpa, voluptatibus similique nesciunt repudiandae! Libero!";

  const sendMessage = async () => {
    // const res = await axios.post("http://localhost:8000/chat", { message: input });
    // setMessages([...messages, { user: input, bot: res.data.response }]);
    setMessages([...messages, { user: input, bot: response }]);
    setInput("");
  };

useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div id="main-box">
        <div id="message-area" ref={containerRef}>
          <div className="message">
            <ChatBox messages={messages} />
          </div>
        </div>
        <ActionInput
          sendMessage={sendMessage}
          input={input}
          setInput={setInput}
        />
      </div>
    </>
  );
};

export default App;
