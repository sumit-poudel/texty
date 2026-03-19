import { useEffect } from "react";
import { socket } from "../store";
import { messageStore, messagesAtom } from "../store";
import type { Message } from "../types";

export const useSocket = () => {
  useEffect(() => {
    socket.on("messages", (data: Message[]) => {
      messageStore.set(messagesAtom, data);
    });

    return () => {
      socket.off("messages");
    };
  }, []);
};
