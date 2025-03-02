import { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;

export const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState("login");
  const [userId, setUserId] = useState(12345);
  const [user, setUser] = useState(null);
  
  const [course, setCourse] = useState("AI");
  const [level, setLevel] = useState("Medium");
  let value = { auth, setAuth, userId, setUserId,course, setCourse, level, setLevel,user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
