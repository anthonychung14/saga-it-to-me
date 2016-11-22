import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import counterSagas  from './sagas/counterSagas';

import Counter from './components/Counter'
import reducer from './reducers/counter'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

const action = type => store.dispatch({type})

sagaMiddleware.run(counterSagas)

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
