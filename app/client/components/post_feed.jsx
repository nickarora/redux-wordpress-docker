import React, { PropTypes } from 'react'
import { Post } from 'components'

const PostFeed = ({ posts }) =>
  <div>
    <h4>Recent posts</h4>
    {posts.map(post => <Post post={post} />)}
  </div>

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default PostFeed
