import React from 'react';

import CancelContainer from '../containers/CancelContainer'
import CounterContainer from '../containers/CounterContainer'

export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <span>
                <h1>COUNTERS </h1>
                <div>
                    <h2>Async</h2>
                    <CounterContainer />
                </div>

                <div>
                    <h2>Cancellable async with race(saga1, cancelAction)</h2>
                    <CancelContainer />
                </div>
            </span>
        )
    }
}

const action = type => store.dispatch({type})
