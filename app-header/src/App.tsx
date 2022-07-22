import React, { Component, useEffect, useState } from 'react';
import { AsyncLoad } from './components/async-load';

class Text extends Component<any, any> {
  render() {
    // eslint-disable-next-line no-console
    console.log(123);
    return (
      <div>{123}</div>
    );
  }
}

function App() {

  const [text, setText] = useState('Hello World');

  useEffect(() => {
    setTimeout(() => {
      setText('Hello You');
    }, 3000);
  });

  return (
    <header>
      <span>{text}</span>
      <AsyncLoad load={() => import('./components/Button/index')} />
      <Text />
    </header>
  );
}

export default App;
