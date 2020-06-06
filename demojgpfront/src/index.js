import React from 'react';
import ReactDOM from 'react-dom';
// import App from './containers/App';
// import Holamundo from './components/Holamundo';
// import Applecount from './components/Applecount';
import AppRoutes from "./routes/AppRoutes";
import regeneratorRuntime from "regenerator-runtime";
import '@babel/polyfill';

ReactDOM.render(
  <AppRoutes/>,
  document.getElementById('root')
);

