import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import 'styles/post_form'

const PostForm = ({ createPost }) =>
  <section className='post-form'>
    <div className='post-form__title'>Create New Post</div>
    <div className='post-form__divider' />
    <form onSubmit={createPost}>
      <div>
        <label>Title</label>
        <Field name='postTitle' component='input' type='text' />
      </div>
      <div>
        <label>Content</label>
        <Field name='postContent' component='textarea' />
      </div>
      <button className='post-form__submit' type='submit'>Submit</button>
    </form>
  </section>

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
}
const decoratedPostForm = reduxForm({
  form: 'post',
})(PostForm)

export default decoratedPostForm
