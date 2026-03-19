import { useAtomValue } from "jotai";
import { messagesAtom, messageStore } from "../../store";
import type { Message } from "../../types";

export const MessageList = () => {
  const messages = useAtomValue(messagesAtom, { store: messageStore });

  return (
    <div className="max-w-5xl flex-1 mx-auto p-4 flex flex-col w-full overflow-y-scroll no-scrollbar gap-2">
      {messages.map((msg, index) => (
        <MessageItem key={index} message={msg} />
      ))}
    </div>
  );
};

const MessageItem = ({ message }: { message: Message }) => {
  return (
    <div>
      <span className="text-xs text-gray-500">{message.user}</span>
      <div className="rounded-2xl text-white blacky w-fit px-4 py-1">
        {message.message}
      </div>
    </div>
  );
};
