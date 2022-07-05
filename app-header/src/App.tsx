import React from 'react';
import { AsyncLoad } from './components/async-load';

function App() {

  return (
    <header>
      <span>Hello World</span>
      <AsyncLoad load={() => import('./components/Button/index')} />
    </header>
  );
}

export default App;
