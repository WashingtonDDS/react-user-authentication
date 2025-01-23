import axios from "axios";

const token = localStorage.getItem("token");
export default axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
