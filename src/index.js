import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './app-reducer.js'

const initialState = { clicks: 0 }
const store = createStore(appReducer, initialState)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
