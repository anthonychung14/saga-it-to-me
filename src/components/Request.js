/*

Request
1. Button to get and display HTTP Requests

Throttle/Debounce
2. Also has a searchBar for you to search based on query typing in (as you type, it searches)
3. Shows how you can easily debounce something with takeLatest after a throttle

Retry calls

4. You can press a button to guarantee an error from an API call as well
5. Once you set the number of retries, you'll do it x number of times
6. onError, throws after set number of retries 

*/
import React from 'react';

export default function Request () {
    return (
        <div>
            <h1>API Requests</h1>
            <h2>Multiple API requests</h2>
            <button onClick={ () => console.log("clicked")}>
                Get JSON
            </button>
            <input type="text" onChange={ (e) => console.log(e.target.value) }/>                                        
            <hr/>
            <h2>Error handling</h2>
            <button onClick={ () => console.log("error thrown")}>
                Throw error
            </button>
            <button onClick={ () => console.log("backoff")}>
                Progressive Backoff
            </button>
        </div>
    )
}


// Request.propTypes = {  
//   // state
//   counter: PropTypes.number.isRequired,
//   countdown: PropTypes.number.isRequired
// }

