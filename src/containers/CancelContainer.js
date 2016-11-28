import { connect } from 'react-redux'

import CancelCounter from '../components/CancelCounter';

import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_ODD,
  INCREMENT_AFTER_COUNT,
  CANCEL_INCREMENT_ASYNC,
  HIDE_CONGRATULATION
} from '../actions/actionTypes'

function mapStateToProps({ countdown, counterCancel }) {  
  return {
    counter: counterCancel,
    countdown
  }
}

function mapDispatchToProps(dispatch) {
    const action = (type, value) => () => dispatch({type, value})
    return {
        increment: action(INCREMENT),
        decrement: action(DECREMENT),
        incrementOdd: action(INCREMENT_IF_ODD),
        cancel: action(CANCEL_INCREMENT_ASYNC),
        incrementAfterCount: action(INCREMENT_AFTER_COUNT, 5)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CancelCounter)
