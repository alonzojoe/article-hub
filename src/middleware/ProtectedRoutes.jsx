import { Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";
import useTheme from "../hooks/useTheme";
import Loader from "../components/Loader";
import { setupTokenInterceptors } from "../services/api";
import Cookie from "cookiejs";
import { decryptData } from "../utils/enc";
import { getLocalStorage } from "../utils/storageActions";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/authSlice";
const ProtectedRoutes = () => {
  const dispatch = useDispatch();
  const [setAppTheme] = useTheme();
  const authUser = getLocalStorage(import.meta.env.VITE_AUTH_USER);
  useEffect(() => {
    setAppTheme();
    const userData = JSON.parse(decryptData(authUser));

    dispatch(setUser({ user: userData }));
  }, [setAppTheme, authUser, dispatch]);

  const auth = Cookie.get(import.meta.env.VITE_AUTH_KEY);
  useEffect(() => {
    if (auth) {
      setupTokenInterceptors(auth);
    }
  }, [auth]);
  console.log("auth", auth);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
