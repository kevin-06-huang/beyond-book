import { createContext, useContext, useState } from "react";
import { UserType } from "../types/UserType";

type AuthContextType = {
  user: UserType | null;
  login: (username: string, password: string) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);

  const login = (username: string, password: string) => {};

  const logout = () => {};

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) throw new Error("useAuth must be inside AuthProvider");

  return context;
};
