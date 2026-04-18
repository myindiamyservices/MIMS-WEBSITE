import axios from "axios";

const rawBase =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_URL ||
  "https://mims-backend-x4zj.onrender.com";

const base = String(rawBase).replace(/\/+$/, "");
const baseURL = base.endsWith("/api") ? base : `${base}/api`;

const API = axios.create({ baseURL });

export default API;