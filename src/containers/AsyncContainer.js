import { connect } from 'react-redux'

import AsyncCounter from '../components/AsyncCounter';

function mapStateToProps({ counterAsync = 0 }) {  
  return {
    value: counterAsync,
  }
}

function mapDispatchToProps(dispatch) {
    const action = type => dispatch({ type })

    return {
        onIncrement: () => action('INCREMENT'),
        onIncrementAsync: () => action('INCREMENT_ASYNC'),
        onDecrement: () => action('DECREMENT')
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncCounter)
