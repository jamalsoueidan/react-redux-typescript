import { createStore, applyMiddleware, Store } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import { History } from 'history';
import { reducers } from './reducer';

export function configureStore(history: History): Store {
  const composeEnhancers = composeWithDevTools(
    applyMiddleware(apiMiddleware, routerMiddleware(history))
  );

  return createStore(
    reducers,
    composeEnhancers
  );
}