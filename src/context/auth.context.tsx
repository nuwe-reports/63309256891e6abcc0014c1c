import React, { useState, useEffect, createContext } from "react";

interface loginState {
  isLoggedIn: boolean;
  logInUser: (username: string) => void;
  logOutUser: (username: string) => void;
  user: string | null;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<loginState | undefined>(undefined);

function AuthProviderWrapper({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<string | null>(null);

  const verifyStoredToken = () => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setIsLoggedIn(true);
      setUser(storedUsername);
    }
  };

  const logInUser = (username: string) => {
    localStorage.setItem("username", username);

    verifyStoredToken();
  };

  const logOutUser = () => {
    localStorage.removeItem("username");
    // setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(() => {
    verifyStoredToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logInUser, logOutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
