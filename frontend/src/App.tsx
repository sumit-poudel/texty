import React, { useEffect, useState } from "react";
import { socket } from "./components/store/socket";
import {
  messages,
  messageStore,
  printedMessage,
} from "./components/store/atoms";
import Modal from "./components/modal";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import axios from "axios";
import Front from "./components/front";
import Sidebar from "./components/sidebar";
import { SidebarOpen, SidebarClose } from "lucide-react";
import { useAtom, useAtomValue } from "jotai";

const App: React.FC = () => {
  type Page = "front" | "register" | "login";
  type ModalState = boolean | null;

  const texts = useAtomValue(messages, { store: messageStore });
  const [text, setText] = useAtom(printedMessage);
  const [name, setName] = useState<string>("");
  const [showModal, setShowModal] = useState<ModalState>(null);
  const [page, setPage] = useState<Page>("front");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const pages = {
    front: (
      <Front
        goToLogin={() => setPage("login")}
        goToRegister={() => setPage("register")}
      />
    ),
    login: <Login name={name} setName={setName} setShowModal={setShowModal} />,
    register: (
      <Register name={name} setName={setName} setShowModal={setShowModal} />
    ),
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:8080/auth/me", {
          withCredentials: true,
        });

        if (res.data.name) {
          setName(res.data.name);
          setShowModal(false);
        } else {
          setShowModal(true);
        }
      } catch (error) {
        console.log(error);
        setShowModal(true);
      }
    };

    checkAuth();
  }, []);

  const send = (): void => {
    const trimmed = text.trim();
    if (!trimmed) return;

    socket.emit("texts", trimmed, name);
    setText("");
  };

  if (showModal === null) return null;

  return (
    <>
      {showModal && <Modal>{pages[page]}</Modal>}

      <div className="relative flex h-dvh overflow-hidden bg-[#eee]">
        <Sidebar isOpen={isOpen} />

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`absolute z-50 top-4 left-4 blacky p-2 rounded-full transition duration-300 ease-in-out hover:scale-105 active:scale-95
            ${isOpen ? `translate-x-40` : ``}
            `}
        >
          {isOpen ? (
            <SidebarClose size={20} color="white" />
          ) : (
            <SidebarOpen size={20} color="white" />
          )}
        </button>

        <section className="flex flex-1 flex-col relative">
          <div className="max-w-5xl flex-1 max-w-5xl mx-auto p-4 flex flex-col w-full overflow-y-scroll no-scrollbar gap-2 ">
            {...texts.map((msg, index) => (
              <div key={index}>
                <span className="text-xs text-gray-500">{msg.user}</span>
                <div className="rounded-2xl text-white blacky w-fit px-4 py-1">
                  {msg.message}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4">
            <div className="max-w-5xl mx-auto flex gap-2 items-center">
              <input
                className="border-[#aeaeae] rounded-full flex-1 pl-4 focus:outline-none h-9 border-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
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
        </section>
      </div>
    </>
  );
};

export default App;
