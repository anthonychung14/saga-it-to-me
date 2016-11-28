import test from 'tape';

import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { onIncrementAsync } from './sagas';

test('onIncrementAsync Saga test', (assert) => {
    const gen = onIncrementAsync();

    assert.deepEqual(
        gen.next().value,
        // => { done: false, value: <result of delay(1000)> }
        call(delay, 1000),
        'onIncrementAsync returns a Promise that will resolve after 1 second'
    )

    assert.deepEqual(
        gen.next().value,
        // => { done: false, value: <result of calling put> }
        put({ type: 'INCREMENT'}),
        'onIncrementAsync should dispatch INCREMENT action after delay'
    )

    assert.deepEqual(
        gen.next(),
        // => { done: true, value: undefined }
        { done: true, value: undefined },
        'onIncrementAsync has a done clause'
    )

     assert.end()
});