import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import objectReducer from './reducers/object';
import objectsReducer from './reducers/objects';

const rootReducer = combineReducers({
  sampleObject: objectReducer('sample'),
  sampleObjects: objectsReducer('samples'),
});

const enhancers = [];
const middleware = [
  thunk
];

const storeEl = document.getElementById('ss-store-data');

const initialState = {
  ...(JSON.parse(storeEl && storeEl.innerHTML) || {}),
};
delete window.STORE_DATA;

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
