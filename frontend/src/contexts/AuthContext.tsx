import { createContext, useContext, useEffect, useState } from "react";
import { getCookie } from "../utils/networkUtils";
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

  useEffect(() => {
    checkSession();
  }, []);

  const ensureCsrfCookie = async () => {
    fetch("/api/csrf-cookie", { credentials: "include" });
  };

  const checkSession = async () => {
    const csrfToken = getCookie("csrftoken");
    if (csrfToken == null) {
      ensureCsrfCookie();
      return;
    }
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      credentials: "include" as RequestCredentials,
    };

    try {
      const response = await fetch("api/check-session", requestOptions);

      if (response.ok && !response.redirected) {
        const data = await response.json();
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("There was a check session error!", err);
      setUser(null);
    }
  };

  const login = async (username: string, password: string) => {
    const csrfToken = getCookie("csrftoken")!;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      credentials: "include" as RequestCredentials,
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

  const logout = async () => {
    const csrfToken = getCookie("csrftoken")!;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      credentials: "include" as RequestCredentials,
    };

    try {
      const response = await fetch("/api/logout", requestOptions);
      if (response.ok) {
        setUser(null);
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.error("There was a logout error!", err);
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    const csrfToken = getCookie("csrftoken")!;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      credentials: "include" as RequestCredentials,
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
