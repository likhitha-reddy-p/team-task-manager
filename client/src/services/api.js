import axios from "axios";

const api = axios.create({
  baseURL: "https://devtrack-server-9fqy.onrender.com/api",
});

export default api;