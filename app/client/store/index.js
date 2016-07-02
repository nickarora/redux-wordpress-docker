import { createStore, applyMiddleware, compose } from 'redux'
import { DevTools } from 'utils'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from 'reducers'

const enhancer = compose(applyMiddleware(apiMiddleware), DevTools.instrument())

const configureStore = (initialState) => createStore(rootReducer, initialState, enhancer)

export default configureStore
