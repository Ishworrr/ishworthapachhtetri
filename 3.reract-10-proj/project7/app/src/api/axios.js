import axios from "axios";

const Axios = axios.create({
  // baseURL:process.env.BACKEND_URL
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

export default Axios;
