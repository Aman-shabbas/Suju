import { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <div id="main-box">
        <div id="message-area">
          <h1>Chat App</h1>
        </div>
        <div className="textarea">
          <input type="text" placeholder="Message..." id="input" />
          <button type="submit" id="submit-button">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default App;