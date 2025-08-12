import "../App.css";

export default function ChatBox({ messages }) {
  return (
    <div>
      {messages.map((m, i) => (
        <div key={i} className="message-box">
          <div className="query-box box">
            <p>
              <b>You:</b> {m.user}
            </p>
          </div>
          <div className="response-box box">
            <p>
              <b>Bot:</b> {m.bot}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
