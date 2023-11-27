// import { Provider } from 'react-redux';
// import { store } from './app/store';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';
import {BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </Router>
);

