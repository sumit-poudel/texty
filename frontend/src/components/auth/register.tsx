import type React from "react";
import { useState } from "react";
import User from "./zod";

type Props = {
  goToLogin: () => void;
  setShowModal: (arg: boolean) => void;
};
const Register = ({ goToLogin, setShowModal }: Props) => {
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [error, seterror] = useState<string>("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    seterror("");

    const result = User.safeParse({
      name: name,
      email: email,
      password: password,
    });

    if (!result.success) {
      // Extract all error messages and display them
      const errorMessages = result.error.message;
      seterror(errorMessages);
      return;
    }
  };
  return (
    <>
      <div className="bg-white text-blaack shadow-lg p-4 rounded-lg">
        <form className="flex text-black justify-center gap-2 items-center rounded-lg flex-col">
          <h2 className="  border-b mb-5 ">Register to continue</h2>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <label htmlFor="name">
            Name:{" "}
            <input
              type="name"
              placeholder="   Enter username"
              onChange={(e) => setname(e.target.value)}
            />
          </label>

          <label htmlFor="">
            {" "}
            Mail id :{" "}
            <input
              type="email"
              placeholder="   Enter your email"
              onChange={(e) => setemail(e.target.value)}
            />
          </label>
          <label className="mb-4" htmlFor="">
            Password :{" "}
            <input
              type="password"
              placeholder="   Enter password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </label>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 px-4 cursor-pointer py-1 text-white"
          >
            Submit
          </button>
          <button className="mx-auto" onClick={goToLogin}>
            continue as guest
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
