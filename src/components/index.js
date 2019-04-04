import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createReduxContainer, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import logger from 'redux-logger';


import { store, AppWithNavigationState } from '../redux/store/store';

const Root = () => {
    return <Provider store={store}>
        <AppWithNavigationState/>
    </Provider>
}

export default Root;