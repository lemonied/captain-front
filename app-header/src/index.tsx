import './public-path';
import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import App from './App';

let root: Root | null = null;

function render(props?: any) {
  root = ReactDOM.createRoot(
    props?.container ? props.container.querySelector('#root') : document.getElementById('root'),
  );
  root?.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

function destroy() {
  root?.unmount();
}

export async function mount(props: any) {
  render(props);
}

export async function bootstrap() {
  // eslint-disable-next-line no-console
  console.log('App header bootstrap');
}

export async function unmount() {
  destroy();
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}
