import axios from "axios";
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 从环境变量读取
  timeout: 10000,
});
// 请求拦截器
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);
// 响应拦截器
http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export default http;