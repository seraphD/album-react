import React from 'react';
import ReactDOM from 'react-dom';
import Album from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./redux/store";
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <Album />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
