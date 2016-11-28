/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const AsyncCounter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>                
    <div>
        <h1>COUNTERS </h1>
        <h2>Async</h2>
        <button onClick={onIncrement}>
            Sync-rement
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
            Async-rement
        </button>
        {' '}
    
        <button onClick={onDecrement}>
            Decrement
        </button>
        
        <hr />
        <div>
            Clicked: {value} times
        </div>
    </div>
    

AsyncCounter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default AsyncCounter
