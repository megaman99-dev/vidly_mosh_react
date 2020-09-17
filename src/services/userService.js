import http from "./httpService";
import { apiEndPoint } from "../config.json";

const apiUrl = apiEndPoint + "/users";

export function register(user) {
  return http.post(apiUrl, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
