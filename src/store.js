import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import taskReducer from './reducers/taskReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  taskReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;