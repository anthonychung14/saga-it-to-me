/* eslint-disable */
import { fork } from 'redux-saga/effects';

import { watchIncrementAsync, watchAllActions, helloSaga } from './async';
import { watchIncrementCancel } from './cancel';
import { watchRequest } from './request';

export default function* rootSaga() {
    yield fork(helloSaga)
    yield fork(watchIncrementAsync)
    yield fork(watchAllActions)
    yield fork(watchIncrementCancel)
    yield fork(watchRequest)
}
