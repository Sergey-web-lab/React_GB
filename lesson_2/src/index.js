import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const myName = 'Sergey';
const testText = 'Если этот текст видно, то проп работает'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App name={myName} />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
