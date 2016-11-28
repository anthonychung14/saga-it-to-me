import React from 'react';

import CancelContainer from './containers/CancelContainer'
import AsyncContainer from './containers/AsyncContainer'
import RequestContainer from './containers/RequestContainer'

export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <span>                
                <AsyncContainer />
                <CancelContainer />
                <RequestContainer />
            </span>
        )
    }
}
