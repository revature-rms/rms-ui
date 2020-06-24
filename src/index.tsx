import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppComponent from './AppContainer';
import { Provider } from 'react-redux';
import { store } from './Store';

ReactDOM.render(
    <Provider store={store}>
        <AppComponent/>
    </Provider>,
    document.getElementById('root'));


