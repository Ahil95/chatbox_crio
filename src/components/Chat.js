import React, { useState } from "react";
import ChatThread from "./ChatThread";
import "./Chat.css";

const ChatApp = () => {
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const getRandomColor = () => {
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff33d1", "#33d1ff"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleMessageSubmit = () => {
    if (newMessage.trim() !== "") {
      const randomUser =
        user_list[Math.floor(Math.random() * user_list.length)];
      const randomColor = getRandomColor();
      const newMessageObj = {
        user: randomUser,
        text: newMessage,
        likes: 0,
        color: randomColor,
      };

      setMessages([...messages, newMessageObj]);
      setNewMessage("");
    }
  };

  const handleLikeClick = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };

  return (
    <div className="chat-app">
      <ChatThread messages={messages} handleLikeClick={handleLikeClick} />
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleMessageSubmit}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
