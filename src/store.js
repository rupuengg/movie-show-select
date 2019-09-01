import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import rootReducer from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const middleware = [reduxPromise, reduxThunk, reduxLogger];
const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;