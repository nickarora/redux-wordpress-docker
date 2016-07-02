import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { PostFeed } from 'components'
// import { bindActionCreators } from 'redux'

const Home = ({ posts }) =>
  <div>
    <PostFeed posts={posts} />
  </div>

Home.propTypes = {
  posts: PropTypes.array.isRequired,
}

const mapStateToProps = ({ posts }) => ({
  posts,
})

const mapDispatchToProps = () => ({
  // propName: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
