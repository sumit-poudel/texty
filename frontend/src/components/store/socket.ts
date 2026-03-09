import { io } from "socket.io-client";
import { messages, messageStore } from "./atoms";

const URL = import.meta.env.VITE_IP || "http://localhost:8080";
export const socket = io(URL);

socket.on("messages", (data) => {
  messageStore.set(messages, data);
});
export { URL };
