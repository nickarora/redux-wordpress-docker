import 'isomorphic-fetch'
import { wordpressApi } from '../../config'
import { wordpressToken } from '../../util'
import { Router } from 'express'

const router = new Router()

const authReq = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${wordpressToken}`, // eslint-disable-line quote-props
  },
}

const checkStatus = response => {
  if (!response.ok) {
    const error = new Error(response.statusText)
    error.status = response.status
    throw error
  }

  return response.json()
}

const postReqConfig = (bodyObj) => ({
  ...authReq,
  method: 'POST',
  body: JSON.stringify(bodyObj),
})

const delReqConfig = () => ({
  ...authReq,
  method: 'DELETE',
})

const strip = content =>
  content.rendered.replace(/<\/?p>|^\s+|\s+$/g, '')

const extractRelevantPostData = posts =>
  posts.map(post => ({
    id: post.id,
    title: strip(post.title),
    excerpt: strip(post.excerpt),
    content: strip(post.content),
  }))

const extractNewPostData = post => ({
  id: post.id,
  title: post.title.raw,
  excerpt: strip(post.excerpt),
  content: post.content.raw,
})

router.get('/', (req, res, next) => {
  fetch(wordpressApi('/posts'))
  .then(checkStatus)
  .then(extractRelevantPostData)
  .then(response => res.status(200).send(response))
  .catch(next)
})

router.post('/', (req, res, next) => {
  fetch(wordpressApi('/posts'), postReqConfig(req.body))
  .then(checkStatus)
  .then(extractNewPostData)
  .then(response => res.status(200).send(response))
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  const postId = req.params.id
  fetch(wordpressApi(`/posts/${postId}`), delReqConfig())
  .then(checkStatus)
  .then(response => res.status(200).send(response))
  .catch(next)
})

router.get('/test', (req, res, next) => {
  const update = {
    title: 'Everything works.',
  }

  fetch(wordpressApi('/posts/1'), postReqConfig(update))
  .then(checkStatus)
  .then(response => res.status(200).send(response))
  .catch(next)
})

export default router
