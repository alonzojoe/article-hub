import { useEffect } from "react";
import Cookie from "cookiejs";
import useApi from "./useApi";

const useSession = () => {
  const {
    isLoading: sessionLoader,
    error: sessionError,
    callApi,
  } = useApi({
    url: "/auth/verify/wqewqeqximwue8x81427894x2184xm721894mx2819",
    method: "GET",
    onSuccess: (data) => {},
    onFailure: (error) => Cookie.remove(`${import.meta.env.VITE_AUTH_KEY}`),
  });

  useEffect(() => {
    callApi();
  }, []);

  return { sessionLoader, sessionError };
};

export default useSession;
