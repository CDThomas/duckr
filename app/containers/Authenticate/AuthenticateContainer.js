import React, { Component, PropTypes } from 'react'
import { Authenticate } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'

const contextTypes = {
  router: PropTypes.object.isRequired,
}

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchAndHandleAuthedUser: PropTypes.func.isRequired,
}

class AuthenticateContainer extends Component {
  constructor (props) {
    super(props)
    this.handleAuth = this.handleAuth.bind(this)
  }

  handleAuth (e) {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => this.context.router.replace('feed'))
  }

  render () {
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth} />
    )
  }
}

AuthenticateContainer.propTypes = propTypes
AuthenticateContainer.contextTypes = contextTypes

function mapStateToProps ({users}) {
  return {
    isFetching: users.isFetching,
    error: users.error,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticateContainer)
