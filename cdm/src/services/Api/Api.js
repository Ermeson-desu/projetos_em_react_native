import axios from "axios";

const api = axios.create({
    baseURL: "https://api.mangadex.org",
    timeout: 10000
});

export default api;
