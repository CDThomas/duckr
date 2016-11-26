import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Feed } from 'components'
import * as feedActionCreators from 'redux/modules/feed'

const propTypes = {
  newDucksAvailable: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  duckIds: PropTypes.array.isRequired,
  setAndHandleFeedListener: PropTypes.func.isRequired,
  resetNewDucksAvailable: PropTypes.func.isRequired,
}

class FeedContainer extends Component {
  componentDidMount () {
    this.props.setAndHandleFeedListener()
  }

  render () {
    return (
      <Feed
        newDucksAvailable={this.props.newDucksAvailable}
        error={this.props.error}
        isFetching={this.props.isFetching}
        duckIds={this.props.duckIds}
        resetNewDucksAvailable={this.props.resetNewDucksAvailable} />
    )
  }
}

FeedContainer.propTypes = propTypes

function mapStateToProps ({feed}) {
  const { newDucksAvailable, error, isFetching, duckIds } = feed
  return {
    newDucksAvailable,
    error,
    isFetching,
    duckIds,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(feedActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer)
