import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import appReducer from "./store/reducer/appReducer";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./store/rootSaga";


const sagaMiddleware = createSagaMiddleware()


const rootReducer = combineReducers({
    appReducer: appReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

export type RootState = ReturnType<typeof store.getState>
