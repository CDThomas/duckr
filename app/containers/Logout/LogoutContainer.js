import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Logout } from 'components'
import { logoutAndUnauth } from 'redux/modules/users'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
}

class LogoutContainer extends Component {
  componentDidMount () {
    this.props.dispatch(logoutAndUnauth())
  }

  render () {
    return (
      <Logout />
    )
  }
}

LogoutContainer.propTypes = propTypes

export default connect()(LogoutContainer)
