import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { PostFeed } from 'components'
import { bindActionCreators } from 'redux'
import * as PostActions from 'actions/posts'

class Home extends Component {
  componentWillMount() {
    const { actions } = this.props
    actions.fetchPosts()
  }

  render() {
    const { posts } = this.props

    return (
      <div>
        <PostFeed posts={posts} />
      </div>
    )
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
}

const mapStateToProps = ({ posts }) => ({
  posts,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(PostActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
