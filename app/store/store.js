/**
 * Created by william on 2017/7/6.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const logger = (store) => (next) => (action) => {
    if (typeof action !== "function") {
        console.log('dispatching:', action);
    }
    return next(action);
};

const store = createStore(
    reducers,
    applyMiddleware(logger, thunk)
);

export default store;