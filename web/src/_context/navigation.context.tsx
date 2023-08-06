import React, { createContext, useState } from 'react';

export const NavigationContext = createContext({} as any);

export default function NavigationContextProvider(props: any) {
  const [activeCategory, setActiveCategory] = useState({
    top: 'all',
    category: 'all',
  });

  return (
    <NavigationContext.Provider value={{ activeCategory, setActiveCategory }}>
      {props.children}
    </NavigationContext.Provider>
  );
}
