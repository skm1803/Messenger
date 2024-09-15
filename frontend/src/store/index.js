import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Use named export instead of default

// Combine your reducers (currently empty)
const rootReducer = combineReducers({});

// Setup middleware (thunk)
const middleware = [thunk];

// Redux DevTools setup (only if available)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the store with middleware and Redux DevTools
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;