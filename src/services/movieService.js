import http from "./httpService";
import { apiEndPoint } from "../config.json";

const apiUrl = apiEndPoint + "/movies";

export function getMovies() {
  return http.get(apiUrl);
}

export function deleteMovie(movieId) {
  return http.delete(apiUrl + "/" + movieId);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(apiUrl + "/" + movie._id, body);
  }
  return http.post(apiUrl, movie);
}

export function getMovie(movieId) {
  return http.get(apiUrl + "/" + movieId);
}
