import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import profile from './profile';
import privacy from './privacy';
import friends from './friends';
import notifications from './notifications';
import viewingUser from './viewingUser';

const rootReducer = combineReducers({
  session,
  profile,
  privacy,
  friends,
  notifications,
  viewingUser,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}


const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, enhancer);

export default configureStore;