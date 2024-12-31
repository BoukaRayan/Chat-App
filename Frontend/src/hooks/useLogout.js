import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/logout",
        {}, // Corps de la requête
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        } // En-tête de la requête
      );
      localStorage.removeItem("chat-user");
      setAuthUser(null);
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

  return { loading, logout };
};

export default useLogout;
