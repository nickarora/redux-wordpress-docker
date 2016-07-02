import React, { PropTypes } from 'react'

const Post = ({ post }) =>
  <div key={post.id}>
    <h4>{post.title}</h4>
    <h5>{post.content}</h5>
  </div>

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post
