import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8000/api/users", {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        const data = res.data;
        setConversations(data);
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

    getConversations();
  }, []);

  return { loading, conversations };
};
export default useGetConversations;
