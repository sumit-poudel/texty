import { useState } from "react";
import { Sidebar } from "../components/chat/Sidebar";
import { MessageList } from "../components/chat/MessageList";
import { MessageInput } from "../components/chat/MessageInput";
import { SidebarOpen, SidebarClose } from "lucide-react";
import { useSocket } from "../hooks";

interface ChatPageProps {
  username: string;
}

export const ChatPage = ({ username }: ChatPageProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useSocket();

  return (
    <div className="relative flex h-dvh overflow-hidden bg-[#eee]">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`absolute z-50 top-4 left-4 blacky p-2 rounded-full transition duration-300 ease-in-out hover:scale-105 active:scale-95 ${
          isSidebarOpen ? "translate-x-40" : ""
        }`}
      >
        {isSidebarOpen ? (
          <SidebarClose size={20} color="white" />
        ) : (
          <SidebarOpen size={20} color="white" />
        )}
      </button>

      <section className="flex flex-1 flex-col relative">
        <MessageList />
        <MessageInput username={username} />
      </section>
    </div>
  );
};
