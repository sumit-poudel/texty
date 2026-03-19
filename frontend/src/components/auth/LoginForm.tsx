import { useState } from "react";
import { useNavigate } from "react-router";
import { authApi } from "../../lib/api";
import { socket } from "../../store";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { loginSchema } from "../../lib/validation";

interface LoginFormProps {
  onBack: () => void;
}

export const LoginForm = ({ onBack }: LoginFormProps) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = loginSchema.safeParse({ name });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setIsLoading(true);
    try {
      await authApi.login(name);
      socket.emit("user:set", name);
      navigate("/");
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 py-8">
      <button
        onClick={onBack}
        className="text-gray-500 hover:text-gray-700 text-sm mb-6"
      >
        ← Back
      </button>
      <h2 className="text-xl font-medium text-gray-900 mb-1">Sign in</h2>
      <p className="text-gray-400 text-sm mb-6">Enter your name to continue</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Continue"}
        </Button>
      </form>

      <p className="mt-6 text-gray-400 text-sm">
        Don't have an account?{" "}
        <button onClick={onBack} className="text-gray-600 hover:underline">
          Sign up
        </button>
      </p>
    </div>
  );
};
