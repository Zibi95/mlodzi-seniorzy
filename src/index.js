import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchSeniors } from './reducer';
// styling
import './index.css';
// Component
import App from './containers/App';

// Redux store creation
const store = createStore(searchSeniors);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
