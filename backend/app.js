import Express from 'express'
import bodyParser from 'body-parser'

const errorHandler = (error, req, res, next) => {
  if (error.status && error.message) {
    return res.status(error.status).send(error.message).end()
  }

  return res.status(500).send({
    message: 'Internal Server Error',
  }).end()
}

const app = new Express()

// Middleware
app.use(bodyParser.json({ type: ['application/json'] }))

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use(errorHandler)

export default app