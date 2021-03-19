import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './reducers/rootReducers';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducers,
  compose(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
store.runSaga = sagaMiddleware.run;
export default store;
