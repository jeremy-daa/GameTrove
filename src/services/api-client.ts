import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c956a1f976ce449ba0dcc7b880f560ae",
  },
});
