import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = localStorage.getItem(import.meta.env.VITE_AUTH_KEY);
  console.log("auth", auth);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
