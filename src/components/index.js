import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createReduxContainer, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import logger from 'redux-logger';

// import AppNavigator from '../routes/router';
import { store, AppWithNavigationState } from '../redux/store/store';

// const navReducer = createNavigationReducer(AppNavigator);
// const appReducer = combineReducers({
//     nav: navReducer,
// });

// // Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
// const middleware = createReactNavigationReduxMiddleware(
//     state => state.nav,
// );

// const App = createReduxContainer(AppNavigator);
// const mapStateToProps = (state) => ({
//     state: state.nav,
// });
// const AppWithNavigationState = connect(mapStateToProps)(App);

// const store = createStore(
//     appReducer,
//     applyMiddleware(logger, middleware),
// );

const Root = () => {
    return <Provider store={store}>
        <AppWithNavigationState/>
    </Provider>
}

export default Root;