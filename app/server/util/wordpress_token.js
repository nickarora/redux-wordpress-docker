const adminUser = process.env.WORDPRESS_ADMIN_USER
const apiKey = process.env.API_KEY

const wordpressToken = (user, key) =>
  new Buffer(`${user}:${key}`).toString('base64')

export default wordpressToken(adminUser, apiKey)
