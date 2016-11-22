import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_ODD,
  INCREMENT_AFTER_COUNT,
  CANCEL_INCREMENT_ASYNC,
  COUNTDOWN_TERMINATED
} from '../actions/actionTypes'

export function countdown(state = 0, action) {
  switch (action.type) {
    case INCREMENT_AFTER_COUNT:
      return action.value
    case COUNTDOWN_TERMINATED:
    case CANCEL_INCREMENT_ASYNC:
      return 0
    default:
      return state
  }
}



export function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case INCREMENT_IF_ODD:
      return state % 2 ? state + 1 : state
    default:
      return state
  }
}
