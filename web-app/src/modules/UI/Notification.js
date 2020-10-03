import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideNotification } from './actions';
import { $win } from '../../utils';

class Notification extends React.Component {

  handleRequestClose = (e) => {
    e.preventDefault()
    this.props.hideNotification();
  };

  
  componentDidUpdate() {
    const mthis = this;
    $win.setTimeout(() => { mthis.props.hideNotification() }, 5000);
  }

  render() {
    const { show, message } = this.props;

    if (!show) {
      return <script />
    }

    return (
      <div style={{ position: "absolute", bottom: 0, right: 10, zIndex:999 }}>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {message}
        <button type="button" 
          className="close" 
          onClick={this.handleRequestClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
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
  { hideNotification }
)(Notification);