import React, { PropTypes } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const App = ({ children }) =>
  <div>
    <h3>Howdy!</h3>
    {children}
  </div>

App.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = () => ({
  // propName: state.prop
})

const mapDispatchToProps = () => ({
  // propName: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
