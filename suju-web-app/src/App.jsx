import { useState, React } from "react";
import axios from "axios";
import "./App.css";
import ChatBox from "./components/ChatBox";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const response =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur mollitia assumenda natus maiores? Reiciendis alias cupiditate cumque nostrum fugit veritatis quod. Quibusdam quasi magnam culpa, voluptatibus similique nesciunt repudiandae! Libero!";

  const sendMessage = async () => {
    // const res = await axios.post("http://localhost:8000/chat", { message: input });
    // setMessages([...messages, { user: input, bot: res.data.response }]);
    setMessages([...messages, { user: input, bot: response }]);
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
          <button type="submit" id="submit-button" onClick={sendMessage}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
