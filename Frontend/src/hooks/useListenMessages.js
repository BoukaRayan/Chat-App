import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { useAuthContext } from "../context/AuthContext";
import notificationSound from "../assets/sounds/sounds-notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { setMessages } = useAuthContext();

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      newMessage.shouldShake = true;
      const audio = new Audio(notificationSound);
      audio.play();
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    // Ajout du listener pour écouter "newMessage"
    socket.on("newMessage", handleNewMessage);

    // Nettoyage : Supprimer le listener quand le socket change ou se déconnecte
    return () => socket.off("newMessage", handleNewMessage);
  }, [socket]);
};

export default useListenMessages;
