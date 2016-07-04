import React, { PropTypes } from 'react'
import { Post } from 'components'

const PostFeed = ({ posts, deletePost }) =>
  <div>
    <h4>Recent posts</h4>
    {posts.map(post =>
      <Post
        post={post}
        key={post.id}
        deletePost={() => deletePost(post)}
      />
    )}
  </div>

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired,
}

export default PostFeed
