import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import posts from 'reducers/posts'

const reducers = combineReducers({
  form,
  posts,
  routing,
})

export default reducers
