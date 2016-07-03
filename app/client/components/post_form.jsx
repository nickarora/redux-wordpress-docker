import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

const PostForm = ({ createPost }) =>
  <form onSubmit={createPost}>
    <div>
      <label>Title</label>
      <Field name='postTitle' component='input' type='text' />
    </div>
    <div>
      <label>Content</label>
      <Field name='postContent' component='textarea' />
    </div>
    <button type='submit'>Submit</button>
  </form>

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
}
const decoratedPostForm = reduxForm({
  form: 'post',
})(PostForm)

export default decoratedPostForm
