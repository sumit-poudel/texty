import axios from "axios";
import { API_URL } from "./config";
import type { User } from "../types";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const authApi = {
  login: async (name: string) => {
    const response = await api.post<User>("/auth/login", { name });
    return response.data;
  },

  register: async (data: { name: string; email: string; password: string }) => {
    await api.post("/auth/register", data);
  },

  me: async () => {
    const response = await api.get<User>("/auth/me");
    return response.data;
  },
};
