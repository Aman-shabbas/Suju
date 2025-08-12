import { useState, React } from "react";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  return (
    <>
      <div id="main-box">
        <div id="message-area">
          {/* <div className="message">
            {messages.map((msg, ind) => (
              <>
                <div key={ind} className="query-box">
                  <p key={ind} className="query">
                    {msg.query}
                  </p>
                </div>
                <div key={ind} className="response-box">
                  <p key={ind} className="resp">
                    {msg.response}
                  </p>
                </div>
              </>
            ))}
          </div> */}

          <div className="message">
            {messages.map((msg, ind) => (
              <div key={ind}>
                <div className="query-box">
                  <p className="query">{msg.query}</p>
                </div>
                <div className="response-box">
                  <p className="resp">{msg.response}</p>
                </div>
              </div>
            ))}
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
                { query: value, response: "This is a mock response" },
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
