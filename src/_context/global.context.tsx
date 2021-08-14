import React from 'react';
import NavigationContextProvider from './navigation.context';
import ScreenSizeContextProvider from './screen-size.context';

export default function GlobalContextProvider(props: any) {
  return (
    <ScreenSizeContextProvider>
      <NavigationContextProvider>{props.children}</NavigationContextProvider>
    </ScreenSizeContextProvider>
  );
}
