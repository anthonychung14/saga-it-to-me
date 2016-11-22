import { takeEvery, delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

// Watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC call
export function* watchIncrementAsync() {
    console.log("i'm watching joo")
    yield takeEvery('INCREMENT_ASYNC', onIncrementAsync)
}

// Worker Saga to perform the async task
export function* onIncrementAsync() { 
    
    // using call side effect to call the func indirectly
    yield call(delay, 1000)
        // => { CALL: { fn: delay, args: [1000] } }
    console.log("yo bro")
    
    yield put({ type: 'INCREMENT' })
        // => { PUT: { type: 'INCREMENT' } }
}

// Customary Hello World
export function* helloSaga() {
    console.log('sup saga')
}

export default function* rootSaga() { 
    yield [
        helloSaga(),
        watchIncrementAsync()
    ]
}


/* 

function* foo() {
    for (var i = 0; i < arr.length; i++) { 
            yield i;
    }
    return "yee haw"; 

    while (true) {
        // do something awesome        
    }
}


var generator = foo()
generator.next()  // { value: 0, done: false } 
generator.next()  // 1
generator.next()  // 2
generator.next()  // 3
generator.next()  // yee haw

*/