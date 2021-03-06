//eslint-disable-next-line

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import * as serviceWorker from "./serviceWorker";


import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();