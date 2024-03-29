import React, { createContext, useContext, useEffect, useState } from 'react';

export const UserContext = createContext({} as any);

export default function UserContextProvider(props: any) {
  const [userInfo, setUserInfo] = useState();
  const [initialized, setInitialized] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(
      window.localStorage.getItem('userInfo') || 'null'
    );
    if (userData) {
      setUserInfo(userData);
      setLoggedIn(true);
    }
    setInitialized(true);
  }, []);

  const setupUser = (userData: any) => {
    setUserInfo(userData);
    setLoggedIn(true);
    window.localStorage.setItem('userInfo', JSON.stringify(userData));
  };

  const logout = () => {
    setUserInfo(undefined);
    setLoggedIn(false);
    window.localStorage.removeItem('userInfo');
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setupUser,
        initialized,
        loggedIn,
        setLoggedIn,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
