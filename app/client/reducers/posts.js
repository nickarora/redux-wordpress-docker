/* eslint-disable max-len */
import {
  POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
} from 'constants'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_SUCCESS:
      return action.payload
    case CREATE_POST_SUCCESS:
      return [action.payload].concat(state)
    default:
      return state
  }
}

export default reducer
