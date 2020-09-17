import http from "./httpService";
import { apiEndPoint } from "../config.json";

const apiUrl = apiEndPoint + "/auth";

export async function login(email, password) {
  const { data: jwt } = await http.post(apiUrl, { email, password });
  localStorage.setItem("token", jwt);
}

export async function logout() {
  await localStorage.removeItem("token");
}
