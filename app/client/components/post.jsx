import React, { PropTypes } from 'react'
import 'styles/post'

const Post = ({ post, deletePost }) =>
  <article className='post'>
    <div className='post__title'>{post.title}</div>
    <div className='post__divider' />
    <div className='post__content'>{post.content}</div>
    <button className='post__deleteButton' onClick={deletePost}>Delete</button>
  </article>

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
}

export default Post
