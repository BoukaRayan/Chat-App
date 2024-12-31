import React from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import { useRef, useEffect } from "react";
import useListenMessages from "../../hooks/useListenMessages";

function Messages() {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
        ))}

      {loading && (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-gray-900"></div>
        </div>
      )}

      {!loading && messages.length === 0 && (
        <p className="text-center text-white ">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
}

export default Messages;
