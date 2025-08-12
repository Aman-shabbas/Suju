import { useState, React } from "react";
import axios from "axios";
import "./App.css";
import ChatBox from "./components/ChatBox";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const res = await axios.post("http://localhost:8000/chat", { message: input });
    setMessages([...messages, { user: input, bot: res.data.response }]);
    setInput("");
  };

  return (
    <>
      <div id="main-box">
        <div id="message-area">
          <div className="message">
            <ChatBox messages={messages} />
          </div>
        </div>
        <div className="textarea">
          <input
            type="text"
            placeholder="Message..."
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            id="submit-button"
            onClick={sendMessage}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
