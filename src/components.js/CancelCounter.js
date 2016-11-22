/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'

import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_ODD,
  INCREMENT_AFTER_COUNT,
  CANCEL_INCREMENT_ASYNC,
  HIDE_CONGRATULATION
} from '../actions/actionTypes'


export default function CancelCounter({counter, countdown, congratulate, dispatch}) {

      const action = (type, value) => () => dispatch({type, value})

      return (
        <div>
          Clicked: {counter} times
          {' '}
          <button onClick={action(INCREMENT)}>+</button>
          {' '}
          <button onClick={action(DECREMENT)}>-</button>
          {' '}
          <button onClick={action(INCREMENT_IF_ODD)}>Increment if odd</button>
          {' '}
          <button
            onClick={countdown ? action(CANCEL_INCREMENT_ASYNC) : action(INCREMENT_AFTER_COUNT, 5)}
            style={{color: countdown ? 'red' : 'black'}}>

            {countdown ? `Cancel increment (${countdown})` : 'increment after 5s'}
          </button>
        </div>
      )
}


CancelCounter.propTypes = {
  // dispatch actions
  dispatch: PropTypes.func.isRequired,
  // state
  counter: PropTypes.number.isRequired,
  countdown: PropTypes.number.isRequired
}

