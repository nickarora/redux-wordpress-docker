/* eslint-disable no-console, no-unused-vars */
import Express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import cors from 'cors'
import routes from './routes'

const errorHandler = (error, req, res, next) => {
  if (error.status && error.message) {
    return res.status(error.status).send(error.message).end()
  }

  console.log(error.message)

  return res.status(500).send({
    message: 'Internal Server Error',
  }).end()
}

const app = new Express()

// Middleware
app.use(cors())
app.use(bodyParser.json({ type: ['application/json'] }))

// Routes
app.use('/', routes)
app.use('/', Express.static(path.resolve(__dirname, '../dist')))
app.use(errorHandler)

export default app
