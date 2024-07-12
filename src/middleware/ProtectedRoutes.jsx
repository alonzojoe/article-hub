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
import useApi from "../hooks/useApi";

const ProtectedRoutes = () => {
  const dispatch = useDispatch();

  const { isLoading, error, callApi } = useApi({
    url: "/auth/session",
    method: "GET",
    onSuccess: (data) => {},
    onFailure: (error) => Cookie.remove(`${import.meta.env.VITE_AUTH_KEY}`),
  });

  const auth = Cookie.get(import.meta.env.VITE_AUTH_KEY);
  useEffect(() => {
    if (auth) setupTokenInterceptors(auth);
    callApi();
  }, [auth]);

  const [setAppTheme] = useTheme();
  const authUser = getLocalStorage(import.meta.env.VITE_AUTH_USER);

  useEffect(() => {
    setAppTheme();
    if (authUser) {
      const userData = JSON.parse(decryptData(authUser));
      dispatch(setUser({ user: userData }));
    }
  }, [setAppTheme, authUser, dispatch]);

  if (isLoading) return <Loader />;
  if (error || !auth) window.location.href = "/login";

  return <Outlet />;
};

export default ProtectedRoutes;
