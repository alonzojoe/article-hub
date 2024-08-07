import { useState, useCallback } from "react";
import api from "../services/api";
const useApi = ({
  url,
  method,
  onSuccess = () => {},
  onFailure = () => {},
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const callApi = useCallback(
    async (payload = {}) => {
      setIsLoading(true);
      setError(null);

      try {
        const config = {
          url,
          method,
        };

        method.toLowerCase() == "get"
          ? (config.params = payload)
          : (config.data = payload);

        const response = await api(config);
        onSuccess(response.data);
      } catch (error) {
        setError(error);
        onFailure(error);
      } finally {
        setIsLoading(false);
      }
    },
    [url, method, onSuccess, onFailure]
  );

  return { isLoading, error, callApi };
};

export default useApi;
