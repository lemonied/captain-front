import React, { useEffect, useRef } from 'react';
import { loadSubApp } from './helpers/core';

function App() {

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = loadSubApp({
      name: 'app-header',
      entry: {
        scripts: ['//localhost:3000/app-header.js'],
        html: '<div id="root"></div>',
      },
      container: headerRef.current!,
    });
    return () => {
      header.unmount();
    };
  }, []);

  return (
    <>
      <header ref={headerRef} />
      <div className="App">
        QianKun
      </div>
    </>
  );
}

export default App;
