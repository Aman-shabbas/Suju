import "../App.css";
import sendIcon from "/assets/send-icon.png"; 

export default function ActionInput({ input, setInput, sendMessage, keyHandler }) {
  return (
    <div className="textarea">
      <div id="input-box">
        <input
          type="text"
          placeholder="Message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={e => keyHandler(e.key)}
        />
          <img
            src={sendIcon}
            alt="send"
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
            onClick={sendMessage}
          />
      </div>
    </div>
  );
}
