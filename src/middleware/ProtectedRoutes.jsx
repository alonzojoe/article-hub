import { Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";
import useTheme from "../hooks/useTheme";
import Loader from "../components/Loader";
const ProtectedRoutes = () => {
  const [setAppTheme] = useTheme();
  useEffect(() => {
    setAppTheme();
  }, [setAppTheme]);

  const auth = localStorage.getItem(import.meta.env.VITE_AUTH_KEY);
  console.log("auth", auth);
  return <Loader />;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
