import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from "./store"
import Header from './Components/Header'



const rootElement = document.getElementById("root")
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <Header />
    <App />
  </React.StrictMode>
  </Provider>,
  rootElement
);