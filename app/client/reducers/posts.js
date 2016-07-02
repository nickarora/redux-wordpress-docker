/* eslint-disable max-len */
import { POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE } from 'constants'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_SUCCESS:
      return action.payload
    case POSTS_FAILURE:
    case POSTS_REQUEST:
    default:
      return state
  }
}

export default reducer
