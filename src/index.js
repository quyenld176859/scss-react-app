import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import userData from './store/userData';

const store = configureStore({
    reducer: {
        userReducer: userData
    }
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
