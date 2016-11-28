import { takeEvery, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

// 1. Customary Hello World
export function* helloSaga() {
    console.log('Hello Saga Repo')
}

// 2A. Watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC call
export function* watchIncrementAsync() {
    // console.log("ASYNC watcher activated")
    yield takeEvery('INCREMENT_ASYNC', onIncrementAsync)
}

// 2B. Worker Saga to perform the async task
export function* onIncrementAsync() {
    // console.log("ASYNC increment called");
    // using call side effect to call the func indirectly
    yield call(delay, 1000)
        // => { CALL: { fn: delay, args: [1000] } }
    // console.log("ASYNC delay complete, calling INCREMENT");

    yield put({ type: 'INCREMENT' })
        // => { PUT: { type: 'INCREMENT' } }
}

// 2A: LISTENS FOR ACTION
export function* watchIncrementSync() {
    console.log("SYNC watcher activated")
    yield takeEvery('INCREMENT_SYNC', onIncrement)
}

// 3B: CALLS ACTION
export function* onIncrement() {
    console.log("INCREMENT SYNC")
    yield put({ type: 'INCREMENT' })
        // => { PUT: { type: 'INCREMENT' } }
}

// 4A. Breadcrumb watcher for all error (INCREMENT) objects
// Generator middleware decouples from async nicely for this reason
export function* watchAllActions() {
    console.log("Watch all INCREMENTs")
    yield takeEvery('INCREMENT', logToStore)
}

// 4B. Breadcrumb generator for all INC action calls
export function* logToStore(args) {
    console.log("Logging INCREMENT to store...");
    // do some async call to store
}

// Seems a lot like a reducer ain't it?

// Diff is that combine reducers is for delegating slices of state
    // Idiomatic way to create a rootSaga

/* 

export default function* async() {
    yield [
        helloSaga(),
        watchIncrementAsync(),
        watchIncrementSync(),
        watchAllActions()
    ]
}
*/