/* eslint-disable */
import "babel-polyfill"

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import sagaMonitor from '../../sagaMonitor'

import reducer from './reducers'
import rootSaga from './sagas'

// import Counter from './components/Counter';
// import CounterCancel from './components/CounterCancel';
import App from './components/App';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
