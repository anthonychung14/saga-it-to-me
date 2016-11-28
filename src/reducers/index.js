import { combineReducers } from 'redux';

import counterAsync from './async';
import { countdown, counterCancel } from './cancel';

const rootReducer = combineReducers({
  countdown,
  counterCancel,
  counterAsync
})

export default rootReducer
