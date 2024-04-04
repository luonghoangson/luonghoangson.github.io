import React from 'react';
import ReactDOM from 'react-dom/client';

const App = React.lazy(() => import(/* webpackChunkName: "App" */ './App'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);