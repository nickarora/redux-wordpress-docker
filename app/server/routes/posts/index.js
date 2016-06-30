import 'isomorphic-fetch'
import { wordpressApi } from '../../config'
import { wordpressToken } from '../../util'
import { Router } from 'express'

const router = new Router()

const checkStatus = response => {
  if (!response.ok) {
    const error = new Error(response.statusText)
    error.status = response.status
    throw error
  }

  return response.json()
}

const postReqConfig = (bodyObj) => ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${wordpressToken}`,
    },
    body: JSON.stringify(bodyObj),
  })

router.get('/', (req, res, next) => {
  fetch(wordpressApi('/posts'))
  .then(checkStatus)
  .then(response => res.status(200).send(response))
  .catch(next)
})

router.get('/test', (req, res, next) => {
  const update = {
    title: 'Everything works.'
  }

  fetch(wordpressApi('/posts/1'), postReqConfig(update))
  .then(checkStatus)
  .then(response => res.status(200).send(response))
  .catch(next)
})

export default router