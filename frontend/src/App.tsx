import { useEffect, useState } from "react";
import { socket } from "./components/socket";
import ID from "./components/ID";
import axios from 'axios';

const App = () => {


    const users=  [{
    "name": "Pooja Sharma",
     "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
     "name":"Prasamsha Baral",
      "profilePhoto": "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
     "name":"Sumit poudel",
      "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
     "name":"Jenish Baral",
      "profilePhoto": "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
     "name":"Jenisha Baral",
      "profilePhoto": "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
     "name":"Samir Poudel",
      "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
     "name":"Pratima Baral",
      "profilePhoto": "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
     "name":"Golu",
      "profilePhoto": "https://randomuser.me/api/portraits/men/4.jpg"
  }
  ]


  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("messages", (data: []): void => {
      setMessages(data);
    });
  }, []);
  const send = () => {
    socket.emit("texts", text);
    setText("");
  };

  return (
    <>
    <div className="flex h-screen ">

    <div className="w-1/3 border-r bg-white">
    <h2 className="text-2xl  flex justify-center italic font-serif mx-7 border-b-1 my-3 px-7 font-bold">Texty</h2>
    { users.map((user,index)=>(
      <ID
      key={index}
      name={user.name}
      profilePhoto={user.profilePhoto}/>
    ))}
      
    </div>

      <section className="flex flex-col w-full h-screen bg-[#eee]">
        <div className="flex-1 max-w-400 mx-auto p-4 flex flex-col w-full overflow-y-scroll no-scrollbar wrap-anywhere gap-1">
          {messages.map((msg, index) => (
            <div
              className="rounded-2xl text-white bg-blue-500 w-fit px-4 p-1"
              key={index}
            >
              {msg}
            </div>
          ))}
        </div>
        <div className="bg-white h-15 ">
          <div className="max-w-300 mx-auto h-full flex gap-1 justify-center items-center">
            <input
              className="border-[#aeaeae] rounded-l-full flex-1 pl-4 rounded-r-full focus:outline-none h-9 border-2"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Message"
            />
            <button
              className="bg-blue-500 rounded-l-full w-20 rounded-r-full text-white h-9 px-4"
              onClick={send}
            >
              send
            </button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default App;
