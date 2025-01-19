import {useState, useCallback} from 'react';
import axios, {AxiosRequestConfig} from 'axios';

type ApiResponse<T> = {
  loading: boolean;
  data: T | null;
  error: string | null;
  callApi: (config: AxiosRequestConfig) => Promise<void>;
};

export const useApi = <T = any,>(): ApiResponse<T> => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const callApi = useCallback(async (config: AxiosRequestConfig) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        ...config,
        headers: {
          'Content-Type': 'application/json',
          ...config.headers,
        },
      });
      setData(response.data);
    } catch (err: any) {
      const errorMsg =
        err.response?.data?.message || err.message || 'An error occurred';
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, data, error, callApi};
};
