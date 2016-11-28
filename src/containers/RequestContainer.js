/*

Performs HTTP request to either get or search for JSON based on a query

1. Shows basic HTTP call to the backend
2. Should be showing how you use takeLatest in the searchBar
3. Error handling from bad calls


What will this do better?

1. Test async code more easily (use jest-watch + sagas)
2. Implement simple undo/redo without a significant refactor
3. Implement optimistic updates

*/

import { connect } from 'react-redux'

import Request from '../components/Request';

export default connect(null, {})(Request);
