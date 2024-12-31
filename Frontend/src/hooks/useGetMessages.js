import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useAuthContext();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:8000/api/messages/${selectedConversation._id}`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        const data = res.data;
        setMessages(data);
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

    //if (selectedConversation?._id) getMessages();
    getMessages();
  }, [selectedConversation?._id]);

  return { messages, loading };
};
export default useGetMessages;
