import { useAtom } from "jotai";
import { inputMessageAtom, socket } from "../../store";

interface MessageInputProps {
  username: string;
}

export const MessageInput = ({ username }: MessageInputProps) => {
  const [text, setText] = useAtom(inputMessageAtom);

  const send = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    socket.emit("texts", trimmed, username);
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      send();
    }
  };

  return (
    <div className="bg-white p-4">
      <div className="max-w-5xl mx-auto flex gap-2 items-center">
        <input
          className="border-[#aeaeae] rounded-full flex-1 pl-4 focus:outline-none h-9 border-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message"
        />
        <button
          onClick={send}
          className="blacky w-20 rounded-2xl text-white h-9 hover:scale-105 hover:shadow-lg transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};
