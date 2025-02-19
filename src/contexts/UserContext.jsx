import { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;

export const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState("login");
  let value = { auth, setAuth };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
