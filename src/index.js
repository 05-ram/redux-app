import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
import App from './App';
import { Store } from './app/store';
import { Provider } from 'react-redux';
=======
import App from './App';
>>>>>>> d9f65583edf7a2500002b1a7fea6fca2b2ae92c6

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={Store}>
      <App />
    </Provider>
=======
    <App />
>>>>>>> d9f65583edf7a2500002b1a7fea6fca2b2ae92c6
  </React.StrictMode>
);
