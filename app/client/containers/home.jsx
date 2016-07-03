import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { PostFeed, PostForm } from 'components'
import { bindActionCreators } from 'redux'
import { reset } from 'redux-form'
import * as PostActions from 'actions/posts'

class Home extends Component {
  componentWillMount() {
    const { actions } = this.props
    actions.fetchPosts()
  }

  createPost(e) {
    e.preventDefault()
    const { actions, form, resetForm } = this.props
    const { post } = form

    if (!post.values ||
        !post.values.postTitle ||
        !post.values.postContent) {
      return
    }

    actions.createPost({
      title: post.values.postTitle,
      content: post.values.postContent,
      status: 'publish',
    })

    resetForm('post')
  }

  render() {
    const { posts } = this.props

    return (
      <div>
        <PostFeed posts={posts} />
        <PostForm createPost={(e) => this.createPost(e)} />
      </div>
    )
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  resetForm: PropTypes.func.isRequired,
}

const mapStateToProps = ({ posts, form }) => ({
  posts,
  form,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(PostActions, dispatch),
  resetForm: bindActionCreators(reset, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
