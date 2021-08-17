import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({} as any);

export default function UserContextProvider(props: any) {
  const [userInfo, setUserInfo] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem('userInfo') || '');
    if (userData) {
      setUserInfo(userData);
      setLoggedIn(true);
    }
  }, [])

  const setupUser = (userData: any) => {
    setUserInfo(userData);
    setLoggedIn(true);
    window.localStorage.setItem('userInfo', JSON.stringify(userData));
  }

  return (
    <UserContext.Provider
      value={{ userInfo, setupUser, loggedIn, setLoggedIn }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
