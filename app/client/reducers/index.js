import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import posts from 'reducers/posts'

const reducers = combineReducers({
  posts,
  routing,
})

export default reducers
