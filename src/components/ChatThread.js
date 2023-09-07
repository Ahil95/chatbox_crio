import React from "react";
import "./ChatThread.css";

const ChatThread = (props) => {
  return (
    <div className="chat-thread">
      {props?.messages.map((message, index) => (
        <div className="chat-message" key={index}>
          <span
            style={{
              padding: "10px",
              borderRadius: "50%",
              marginRight: "10px",
              backgroundColor: message?.color,
            }}
          >
            {message.user.slice(0, 1)}
          </span>
          <span className="user">{message.user}</span>
          <div className="message">
            {message.text}
            <button
              onClick={() => props?.handleLikeClick(index)}
              className="like-button"
            >
              Like <span className="like-count">{message.likes}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatThread;
