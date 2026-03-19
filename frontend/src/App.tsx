import { useAuth } from "./hooks";
import { ProtectedRoute } from "./components/layout";
import { ChatPage } from "./pages";

export const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <ChatPage username={user?.name || ""} />
    </ProtectedRoute>
  );
};

export default App;
