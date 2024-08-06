import React, { useEffect } from "react";
import Cookie from "cookiejs";
import { setupTokenInterceptors } from "../services/api";
const useAuthInterceptors = () => {
  useEffect(() => {
    const token = Cookie.get(import.meta.env.VITE_AUTH_KEY);

    if (token) setupTokenInterceptors(token);
  }, []);
};

export default useAuthInterceptors;
