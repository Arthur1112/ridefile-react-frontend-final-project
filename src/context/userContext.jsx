import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const { Provider } = UserContext;
  const [user, setUser] = useState();
  const [token, setToken] = useState("");
  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token);
    }
  }, []);

  const value = {
    user,
    setUser,
    token,
    setToken,
  };
  return <Provider value={value}>{children}</Provider>;
};
