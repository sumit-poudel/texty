import { atom, createStore } from "jotai";

interface Message {
  message: string;
  user: string;
}

const messageStore = createStore();
const printedMessage = atom("");
const messages = atom<Message[]>([
  { message: "welcome to texty!", user: "texty" },
]);

export { messageStore, messages,printedMessage };
