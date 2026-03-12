import axios, { AxiosRequestConfig, AxiosError } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

// ✅ Request Interceptor
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      console.error(
        "API Error:",
        (error.response.data as any)?.message || error.message
      );

      if (error.response.status === 401) {
        window.location.href = "/login";
      }
    } else if (error.request) {
      console.error("No response received from server.");
    } else {
      console.error("Request setup error:", error.message);
    }

    return Promise.reject(error);
  }
);