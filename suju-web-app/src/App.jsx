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

  const sendMessage = async () => {
    if (!input.trim()) return; 
    const res = await axios.post(`http://localhost:8000/chat`, {
      message: input,
    });

    setMessages([...messages, { user: input, bot: res.data.response }]);
    setInput("");
  };

  const enterKeyHandler = (key) => {
    if (key === "Enter") {      
      sendMessage();
      setInput("")
      return;
    }
  }

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
          keyHandler={enterKeyHandler}
        />
      </div>
    </>
  );
};

export default App;
