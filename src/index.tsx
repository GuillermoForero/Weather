import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import {rootReducer} from './reducers'
import reduxThunk from 'redux-thunk';
const store = createStore(
    rootReducer, // Reducers
    {}, // Estado inicial
    applyMiddleware(reduxThunk)
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
