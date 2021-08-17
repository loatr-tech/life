import React, { createContext, useState } from 'react';

export const UserContext = createContext({} as any);

export default function UserContextProvider(props: any) {
  const [userInfo, setUserInfo] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{ userInfo, setUserInfo, loggedIn, setLoggedIn }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
