import React, { Component, PropTypes } from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'

class AuthenticateContainer extends Component {
  constructor (props) {
    super(props)
    this.handleAuth = this.handleAuth.bind(this)
  }

  handleAuth () {
    auth().then((user) => {
      console.log('Authed user:', user)
    })
  }

  render () {
    return (
      <Authenticate
        isFetching={false}
        error=''
        onAuth={this.handleAuth} />
    )
  }
}

export default AuthenticateContainer
