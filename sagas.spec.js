import test from 'tape';

import { incrementAsync } from './sagas';

test('incrementAsync Saga test', (assert) => {
    const gen = incrementAsync();

    assert.deepEqual(
        gen.next(),
  // => { done: false, value: <result of delay(1000)> } 
        { done: false, value: '' },
        'incrementAsync returns a Promise that will resolve after 1 second'
    )
     
     gen.next() // => { done: false, value: <result of calling put> }
     gen.next() // => { done: true, value: undefined }
})