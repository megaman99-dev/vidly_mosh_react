import http from "./httpService";
import { apiEndPoint } from "../config.json";

export function getGenres() {
  return http.get(apiEndPoint + "/genres");
}
