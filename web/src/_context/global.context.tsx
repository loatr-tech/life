import React from 'react';
import NavigationContextProvider from './navigation.context';
import ScreenSizeContextProvider from './screen-size.context';
import UserContextProvider from './user.context';

export default function GlobalContextProvider(props: any) {
  return (
    <ScreenSizeContextProvider>
      <UserContextProvider>
        <NavigationContextProvider>{props.children}</NavigationContextProvider>
      </UserContextProvider>
    </ScreenSizeContextProvider>
  );
}
