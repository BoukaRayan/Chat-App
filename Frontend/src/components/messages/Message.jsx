import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import extractTime from "../../utils/extractTime";

function Message({ message }) {
  const { authUser, selectedConversation } = useAuthContext();
  const fromMe = message.senderId === authUser._id;
  const time = extractTime(message.createdAt || new Date().toISOString());
  const shakeClass = message.shouldShake ? "shake" : "";


  return (
    <div className={`chat ${fromMe ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              fromMe ? authUser.profilePic : selectedConversation?.profilePicture
            }
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${fromMe ? "bg-blue-500" : ""} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">
        {time}
      </div>
    </div>
  );
}
export default Message;
