// This container doesn't have any state or lifecycle events, so
// it doesn't add a new component. It just connects redux to Modal
import { Modal } from 'components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as modalActionCreators from 'redux/modules/modal'
import * as duckActionCreators from 'redux/modules/ducks'

function mapStateToProps ({modal, users}, props) {
  const duckTextLength = modal.duckText.length
  return {
    user: users[users.authedId] ? users[users.authedId].info : {},
    duckText: modal.duckText,
    isOpen: modal.isOpen,
    isSubmitDisabled: duckTextLength <= 0 || duckTextLength > 140,
  }
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators({...modalActionCreators, ...duckActionCreators}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
