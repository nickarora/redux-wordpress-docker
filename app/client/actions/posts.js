import { CALL_API } from 'redux-api-middleware'
import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from 'constants'

import { nodeApi } from 'config'

const endpoint = `http://${nodeApi.hostMachineIp}:${nodeApi.port}`

export const fetchPosts = () => ({
  [CALL_API]: {
    endpoint: `${endpoint}/posts`,
    method: 'GET',
    types: [POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE],
  },
})

export const createPost = (post) => ({
  [CALL_API]: {
    endpoint: `${endpoint}/posts`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
    types: [CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE],
  },
})
