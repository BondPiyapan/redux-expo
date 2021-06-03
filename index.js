

import React from 'react';
import { registerRootComponent } from 'expo';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'


const store = createStore(reducers, applyMiddleware(thunk, logger));
const ReduxApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)



registerRootComponent(ReduxApp);