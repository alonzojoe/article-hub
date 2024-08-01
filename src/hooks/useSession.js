import { useEffect } from "react";
import Cookie from "cookiejs";
import useApi from "./useApi";
import { generateRandomKey } from "../utils/radomizer";

const useSession = () => {
  const key = generateRandomKey(56);
  const {
    isLoading: sessionLoader,
    error: sessionError,
    callApi,
  } = useApi({
    url: `/auth/verify/${key}`,
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
