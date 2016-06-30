const user = process.env.WORDPRESS_ADMIN_USER
const key = process.env.API_KEY

const wordpressToken = (user, key) =>
  new Buffer(`${user}:${key}`).toString('base64')

export default wordpressToken(user, key)