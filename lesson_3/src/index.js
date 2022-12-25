import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store'
import reportWebVitals from './reportWebVitals';

const myName = 'Sergey';
const testText = 'Если этот текст видно, то проп работает'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App name={myName} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
