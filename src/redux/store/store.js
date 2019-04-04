import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connect } from 'react-redux';
import logger from 'redux-logger';
import { createNavigationReducer, createReactNavigationReduxMiddleware, createReduxContainer } from 'react-navigation-redux-helpers';

// import navReducer from '../reducers/routeReducer';
import AppNavigator from '../../routes/router';

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
    nav: navReducer,
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
);

const App = createReduxContainer(AppNavigator);
const mapStateToProps = (state) => ({
    state: state.nav,
});
export const AppWithNavigationState = connect(mapStateToProps)(App);

export const store = createStore(
    appReducer,
    applyMiddleware(logger, middleware),
);

