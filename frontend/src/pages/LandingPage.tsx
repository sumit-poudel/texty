import { useState } from "react";
import { AuthCard, LoginForm, RegisterForm } from "../components/auth";

type View = "home" | "login" | "register";

export const LandingPage = () => {
  const [view, setView] = useState<View>("home");

  if (view === "login") {
    return (
      <AuthCard>
        <LoginForm onBack={() => setView("home")} />
      </AuthCard>
    );
  }

  if (view === "register") {
    return (
      <AuthCard>
        <RegisterForm onBack={() => setView("home")} />
      </AuthCard>
    );
  }

  return (
    <AuthCard>
      <nav className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center md:justify-center md:gap-5 lg:justify-between lg:gap-8">
        <div className="flex flex-col sm:flex-row justify-center sm:gap-2 p-4 md:gap-1 lg:gap-6 lg:p-5">
          <button className="border-black border-2 text-xs p-1 text-black rounded-2xl cursor-pointer shadow-md hover:shadow-lg hover:scale-105 transition-all">
            Individual
          </button>
          <p className="navItem">Business</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:gap-1 p-4 md:gap-1 lg:gap-5 lg:p-4">
          <p className="navItem">Features</p>
          <p className="navItem">Privacy</p>
          <p className="navItem">Help center</p>
        </div>
        <div className="flex flex-col pt-4 sm:p-4 md:flex-row justify-center sm:gap-1 p-3 md:gap-2 lg:gap-6 lg:p-5">
          <p className="navItem">Web</p>
          <button className="btn">download</button>
        </div>
      </nav>

      <div className="px-4 sm:px-6 md:px-10">
        <h1 className="text-black underline text-xl sm:text-2xl md:text-3xl lg:text-4xl px-1.5 font-serif">
          Designed for <br />
          Productivity in <br />
          Everyday Conversations
        </h1>
        <br />
        <h3 className="text-black font-mono text-lg sm:text-base md:text-lg">
          Stay Connected, Stay Texty.
        </h3>

        <div className="flex flex-wrap gap-4 my-4 items-center">
          <button
            className="btn hover:scale-105 transition-transform"
            onClick={() => setView("register")}
          >
            Get Started
          </button>
          <span className="text-gray-500 text-sm">or</span>
          <button
            className="hover:text-blue-600 underline transition-colors"
            onClick={() => setView("login")}
          >
            sign in
          </button>
        </div>
      </div>
    </AuthCard>
  );
};
