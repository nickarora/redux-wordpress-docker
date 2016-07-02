import React, { PropTypes } from 'react'

const App = ({ children }) =>
  <div>
    <h3>Redux Docker Wordpress.</h3>
    {children}
  </div>

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
