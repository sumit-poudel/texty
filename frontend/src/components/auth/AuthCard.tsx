import type { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

export const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eee] p-4">
      <div className="w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[69vw] bg-[#eee] p-4 border-[#1c1001] border-[3px] rounded-4xl shadow-md">
        {children}
      </div>
    </div>
  );
};
