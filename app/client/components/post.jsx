import React, { PropTypes } from 'react'

const Post = ({ post }) =>
  <div>
    <h4>{post.title}</h4>
    <h5>{post.content}</h5>
  </div>

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post
