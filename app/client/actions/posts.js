import { CALL_API } from 'redux-api-middleware'
import { POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE } from 'constants'

import { nodeApi } from 'config'

const endpoint = `http://${nodeApi.hostMachineIp}:${nodeApi.port}`

export const fetchPosts = () => ({
  [CALL_API]: {
    endpoint: `${endpoint}/posts`,
    method: 'GET',
    types: [POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE],
  },
})
