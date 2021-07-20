import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID QB6gURUwJh6f2PL8lbkuOzIWwAXYwvLtWu2vYmR-q7o",
  },
});
