/* eslint-disable max-len */
import {
  POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
} from 'constants'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_SUCCESS:
      return action.payload
    case CREATE_POST_SUCCESS:
      return [action.payload].concat(state)
    case DELETE_POST_SUCCESS:
      return state.filter((post) => post.id !== action.payload.id)
    default:
      return state
  }
}

export default reducer
