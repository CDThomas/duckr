import React, { Component, PropTypes } from 'react'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { container, innerContainer } from './styles.css'

const propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

class MainContainer extends Component {
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = propTypes

export default connect(
  state => ({isAuthed: state.isAuthed})
)(MainContainer)
