import { combineReducers } from 'redux'

import { routerReducer as routing } from 'react-router-redux'

const reducers = combineReducers({
  routing,
})

export default reducers
