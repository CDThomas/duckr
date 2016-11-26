import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Duck } from 'components'

const { func, object, bool, number, string } = PropTypes

const propTypes = {
  duckId: string.isRequired,
  duck: object.isRequired,
  numberOfLikes: number,
  isLiked: bool.isRequired,
  hideLikeCount: bool.isRequired,
  hideReplyBtn: bool.isRequired,
  handleDeleteLike: func.isRequired,
  addAndHandleLike: func.isRequired,
}

const defaultProps = {
  hideReplyBtn: false,
  hideLikeCount: true,
}

const contextTypes = {
  router: object.isRequired,
}

class DuckContainer extends Component {
  constructor (props) {
    super(props)
    this.goToProfile = this.goToProfile.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  goToProfile (e) {
    e.stopPropagation()
    this.context.router.push(`/${this.props.duck.uid}`)
  }

  handleClick (e) {
    e.stopPropagation()
    this.context.router.push(`/duckDetail/${this.props.duck.duckId}`)
  }

  render () {
    return (
      <Duck
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn === true ? null : this.handleClick}
        {...this.props} />
    )
  }
}

DuckContainer.propTypes = propTypes
DuckContainer.defaultProps = defaultProps
DuckContainer.contextTypes = contextTypes

function mapStateToProps ({ducks, likeCount, usersLikes}, props) {
  return {
    duck: ducks[props.duckId],
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId],
  }
}

export default connect(
  mapStateToProps
)(DuckContainer)
