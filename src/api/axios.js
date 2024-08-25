import axios from "axios";

const instance = axios.create({
  baseURL: "https://blog-app-backend-bice-pi.vercel.app/api",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default instance;
