/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'

export default function CancelCounter({ 
  cancel,
  counter, 
  countdown, 
  congratulate, 
  decrement, 
  increment, 
  incrementOdd,
  incrementAfterCount
}) {
      return (
        <div>
        <h2>Cancellable async with race(saga1, cancelAction)</h2>
          Clicked: {counter} times
          {' '}
          <button onClick={ increment }>+</button>
          {' '}
          <button onClick={ decrement }>-</button>
          {' '}
          <button onClick={ incrementOdd }>Increment if odd</button>
          {' '}
          <button
            onClick={countdown ? cancel : incrementAfterCount }
            style={{color: countdown ? 'red' : 'black'}}>

            {countdown ? `Cancel increment (${countdown})` : 'increment after 5s'}
          </button>
          <hr />
        </div>
      )
}


CancelCounter.propTypes = {  
  // state
  counter: PropTypes.number.isRequired,
  countdown: PropTypes.number.isRequired
}

