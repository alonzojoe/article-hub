import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.defaults.headers.common["ngrok-skip-browser-warning"] = "69420";

export const setupTokenInterceptors = (token) => {
  if (token) {
    api.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }
};

export default api;
