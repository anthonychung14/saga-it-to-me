import { connect } from 'react-redux'

import Counter from '../components/Counter';

function mapStateToProps(state) {
  return {
    value: state.counter,
  }
}

function mapDispatchToProps(dispatch) {
    const action = type => dispatch({type})

    return {
        onIncrement: () => action('INCREMENT'),
        onIncrementAsync: () => action('INCREMENT_ASYNC'),
        onDecrement: () => action('DECREMENT')
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
