import React, { PropTypes } from 'react'

const Post = ({ post, deletePost }) =>
  <div>
    <h4>{post.title}</h4>
    <h5>{post.content}</h5>
    <button onClick={deletePost}>Delete</button>
  </div>

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
}

export default Post
