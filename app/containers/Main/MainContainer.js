import React, { Component, PropTypes } from 'react'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { container, innerContainer } from './styles.css'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'
import { formatUserInfo } from 'helpers/utils'
import { firebaseAuth } from 'config/constants'

const propTypes = {
  children: PropTypes.element.isRequired,
  isAuthed: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  authUser: PropTypes.func.isRequired,
  fetchingUserSuccess: PropTypes.func.isRequired,
  removeFetchingUser: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
}

const contextTypes = {
  router: PropTypes.object.isRequired,
}

class MainContainer extends Component {
  componentDidMount () {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
        this.props.authUser(user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())

        if (this.props.location.pathname === '/') {
          this.context.router.replace('feed')
        }
      } else {
        this.props.removeFetchingUser()
      }
    })
  }

  render () {
    return this.props.isFetching === true
      ? null
      : <div className={container}>
          <Navigation isAuthed={this.props.isAuthed} />
          <div className={innerContainer}>
            {this.props.children}
          </div>
        </div>
  }
}

MainContainer.propTypes = propTypes
MainContainer.contextTypes = contextTypes

export default connect(
  ({users}) => ({isAuthed: users.isAuthed, isFetching: users.isFetching}),
  dispatch => bindActionCreators(userActionCreators, dispatch)
)(MainContainer)
