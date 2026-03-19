import { useState } from "react";
import { authApi } from "../../lib/api";
import { registerSchema } from "../../lib/validation";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

interface RegisterFormProps {
  onBack: () => void;
}

export const RegisterForm = ({ onBack }: RegisterFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = registerSchema.safeParse({ name, email, password });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setIsLoading(true);
    try {
      await authApi.register({ name, email, password });
      onBack();
    } catch {
      setError("Registration failed. Try again.");
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
      <h2 className="text-xl font-medium text-gray-900 mb-1">Create account</h2>
      <p className="text-gray-400 text-sm mb-6">Sign up to get started</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create account"}
        </Button>
      </form>

      <p className="mt-6 text-gray-400 text-sm">
        Already have an account?{" "}
        <button onClick={onBack} className="text-gray-600 hover:underline">
          Sign in
        </button>
      </p>
    </div>
  );
};
