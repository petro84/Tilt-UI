import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import beacons from '../reducers/beacons'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        beacons,
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}