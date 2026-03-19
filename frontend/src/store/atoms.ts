import { atom } from "jotai";
import { createStore } from "jotai";
import type { Message } from "../types";

export const messageStore = createStore();

export const messagesAtom = atom<Message[]>([
  { message: "welcome to texty!", user: "texty" },
]);

export const inputMessageAtom = atom("");
