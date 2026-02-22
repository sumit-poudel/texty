import { useEffect, useState } from "react";
import { socket } from "./components/socket";

const App = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
  }, []);
  const send = () => {
    socket.emit("texts", text);
    setText("");
  };

  return (
    <>
      <section className="w-full flex flex-col h-screen bg-[#eee]">
        <div className="flex-1 text-center align-middle">messages</div>
        <div className="bg-white h-20 ">
          <div className="max-w-300 flex justify-center items-center">
            <input
              className="border-red-500 border-2"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button onClick={send}>Send</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
