import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = ({ error, className = "", ...props }: InputProps) => {
  return (
    <div className="w-full">
      <input
        className={`w-full px-4 py-3 border rounded-xl outline-none transition ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-gray-200 focus:border-gray-400"
        } ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
