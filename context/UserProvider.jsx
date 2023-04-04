import React, { useEffect, useState } from "react";
import { getCurrentUserDetail, isLogggedIn } from "../authentication";
import userContext from "./userContext";

function UserProvider({ children }) {
  const [user, setUser] = useState({
    data: {},
    login: false,
  });
  useEffect(() => {
    setUser({
      data: getCurrentUserDetail(),
      login: isLogggedIn(),
    });
    console.log(user);
  }, []);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
export default UserProvider;
