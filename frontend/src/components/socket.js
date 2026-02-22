import { io } from "socket.io-client";

const URL = "http://172.16.4.164:8080";

export const socket = io(URL);
