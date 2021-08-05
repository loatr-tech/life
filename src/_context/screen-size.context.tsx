import React, { createContext, useEffect, useState } from 'react';

export const SCREEN = {
  DESKTOP: 'DESKTOP',
  TABLET: 'TABLET',
  MOBILE: 'MOBILE',
};


export const ScreenSizeContext = createContext({} as any);

export default function ScreenSizeContextProvider(props: any) {
  const [screenSize, setScreenSize] = useState(SCREEN.DESKTOP);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setScreenSize(SCREEN.DESKTOP);
    } else if (window.innerWidth >= 576) {
      setScreenSize(SCREEN.TABLET);
    } else {
      setScreenSize(SCREEN.MOBILE);
    }
  }, []);

  const toggleSidePanel = () => {
    setSidePanelOpen(!sidePanelOpen);
  }

  return (
    <ScreenSizeContext.Provider
      value={{ screenSize, sidePanelOpen, toggleSidePanel }}
    >
      {props.children}
    </ScreenSizeContext.Provider>
  );
}
