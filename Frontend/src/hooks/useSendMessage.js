import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useAuthContext();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/messages/send/${selectedConversation._id}`,
        { message }, // Corps de la requête
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        } // En-tête de la requête
      );
      const data = res.data;
      setMessages([...messages, data]);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};
export default useSendMessage;
