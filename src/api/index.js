import axios from "axios";

const API = axios.create({
  baseURL: "https://api.tvmaze.com",
});

// Snippet
export const fetchAllMovies = () => API.get("/search/shows?q=all");
export const fetchMovie = (id) => API.get(`/shows/${id}`);
