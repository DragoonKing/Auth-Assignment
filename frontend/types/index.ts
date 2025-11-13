export interface User {
  id: string;
  name: string;
  email: string;
  role: 'User' | 'Admin';
}

export interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}

export interface ErrorResponse {
  success: boolean;
  message: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  role?: 'User' | 'Admin';
}

export interface LoginData {
  email: string;
  password: string;
}
