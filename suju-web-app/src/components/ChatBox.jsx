import React, { useState } from "react";
import axios from "axios";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const res = await axios.post("http://localhost:8000/chat", { message: input });
    setMessages([...messages, { user: input, bot: res.data.response }]);
    setInput("");
  };

  return (
    <div>
      {messages.map((m, i) => (
        <div key={i}>
          <p><b>You:</b> {m.user}</p>
          <p><b>Bot:</b> {m.bot}</p>
        </div>
      ))}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}