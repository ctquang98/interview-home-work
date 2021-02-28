import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux';
import HomeSpinner from './components/spinner';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<HomeSpinner/>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
