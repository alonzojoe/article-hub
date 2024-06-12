import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = localStorage.getItem("jajas89jad892m2i1o3pmlasd9u");
  console.log("auth", auth);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
