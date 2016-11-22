import { connect } from 'react-redux'

import CancelCounter from '../components/CancelCounter';

function mapStateToProps(state) {
  return {
    counter: state.counter,
    countdown: state.countdown
  }
}

export default connect(mapStateToProps)(CancelCounter)
