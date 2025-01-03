export interface AuthUser {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  error?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  loading: boolean;
} 