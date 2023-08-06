import React from 'react';

export default function NotFound() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '10vh',
        height: '80vh',
      }}
    >
      <h1 style={{ color: 'darkgrey', userSelect: 'none' }}>404 Not Found</h1>
    </main>
  );
}
