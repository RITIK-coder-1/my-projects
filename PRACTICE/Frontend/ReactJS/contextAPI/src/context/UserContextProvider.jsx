import React from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  return <UserContext>{children}</UserContext>;
}

export default UserContextProvider;
