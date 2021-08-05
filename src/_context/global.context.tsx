import React from 'react';
import ScreenSizeContextProvider from './screen-size.context';

export default function GlobalContextProvider(props: any) {
  return (
    <ScreenSizeContextProvider>{props.children}</ScreenSizeContextProvider>
  );
}
