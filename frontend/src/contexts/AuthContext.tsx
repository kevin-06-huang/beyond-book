import { createContext, useContext, useState } from "react";
import { UserType } from "../types/UserType";

type AuthContextType = {
  user: UserType | null;
  login: (username: string, password: string) => Promise<Boolean | undefined>;
  logout: () => void;
  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<Boolean | undefined>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);

  const login = async (username: string, password: string) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password: password,
      }),
    };

    try {
      const response = await fetch("/api/login", requestOptions);
      const data = await response.json();
      if (response.ok) {
        setUser(data);
        return true;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    };

    try {
      const response = await fetch("/api/registration", requestOptions);
      const data = await response.json();
      if (response.ok) {
        setUser(data);
        return true;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) throw new Error("useAuth must be inside AuthProvider");

  return context;
};
