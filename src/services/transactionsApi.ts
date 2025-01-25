import axios from "axios";

const token = localStorage.getItem("token");
export default axios.create({
  baseURL: "https://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
