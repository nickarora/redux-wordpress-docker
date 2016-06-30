import 'isomorphic-fetch'
import { wordpress_api } from '../../config'
import { Router } from 'express'

const router = new Router()

const checkStatus = response => {
  console.log('sup')
  if (!response.ok) {
    console.log('sup')
    const error = new Error(response.statusText)
    error.status = response.status
    throw error
  }

  return response.json()
}

router.get('/', (req, res, next) => {
  fetch(wordpress_api('posts'))
  .then(checkStatus)
  .then(response => res.status(200).send(response))
  .catch(next)
})

export default router