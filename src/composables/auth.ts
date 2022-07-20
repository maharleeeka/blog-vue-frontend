import axios from "axios";
import { ref } from "vue";
import { API_URL } from "../constants/apiUrl";
export default function useAuth() {
  const accessToken = ref("");
  const register = async (userData: {
    email: string;
    password: string;
    c_password: string;
  }) => {
    const response = await axios.post(`${API_URL}register`, userData);
    accessToken.value = response.data.data.token;
  };

  const login = async (userData: { email: string; password: string }) => {
    const response = await axios.post(`${API_URL}login`, userData);
    accessToken.value = response.data.data.token;
  };

  return {
    register,
    accessToken,
    login,
  };
}
