import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga  from './sagas';

import Counter from './Counter'
import reducer from './reducers'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

const action = type => store.dispatch({type})

sagaMiddleware.run(rootSaga)

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT_SYNC')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onDecrement={() => action('DECREMENT')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
