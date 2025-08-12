import { useState, React } from "react";
import "./App.css";
import ChatBox from "./components/ChatBox";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

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
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            id="submit-button"
            onClick={() => {
              if (value.trim() === "") return;
              setMessages([
                ...messages,
                { user: value, bot: "This is a mock response" },
              ]);
              setValue("");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
