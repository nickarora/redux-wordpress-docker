import React, { PropTypes } from 'react'
import { Header } from 'components'

const App = ({ children }) =>
  <div>
    <Header />
    {children}
  </div>

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
