export interface Message {
  message: string;
  user: string;
}

export interface User {
  name: string;
  email?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
}
