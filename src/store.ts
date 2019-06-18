import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import reducer from './reducers';
import { rootSaga } from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));
sagaMiddleware.run(rootSaga);