import "../App.css";

export default function ActionInput({ input, setInput, sendMessage }) {
  return (
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
  );
}
