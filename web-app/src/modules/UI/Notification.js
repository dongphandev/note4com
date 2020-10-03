import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideNotification as hideNotificationAction } from './actions';


const Snackbar = ({ title = "", message = "", open = false, onRequestClose }) => {
  return (
    <div className="toast  fade show" style={{ position: "absolute", bottom: 0, right: 10 }}>
      <div className="toast-header">
        <img src="..." className="rounded mr-2" alt="..." />
        <strong className="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">
        Hello, world! This is a toast message.
    </div>
    </div>
  );
}

class Notification extends React.Component {
  handleRequestClose = () => {
    this.props.hideNotification();
  };

  render() {
    const { show, message } = this.props;
    return (
      <Snackbar
        open={show}
        message={message}
        onRequestClose={() => { }}
      />
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool.isRequired,
  hideNotification: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state.ui.notification
});

export default connect(
  mapStateToProps,
  { hideNotification: hideNotificationAction }
)(Notification);