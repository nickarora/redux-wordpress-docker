import { createStore, compose } from 'redux'
import { DevTools } from 'utils'
import rootReducer from 'reducers'

// import api from 'middleware/api'
// applyMiddleware(api)

const enhancer = compose(DevTools.instrument())

const configureStore = (initialState) => createStore(rootReducer, initialState, enhancer)

export default configureStore
