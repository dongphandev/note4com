import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideLoading as hideLoadingAction } from './actions';


const styles = {
  position: "absolute",
  width: "100%",
  height: "100%",
  paddingTop: 50,
  opacity: 0.3,
  backgroundColor: "gray",
  zIndex: 1000
};

class PageLoading extends React.Component {
  handleRequestClose = () => {
    this.props.hideLoading();
  };

  render() {
    const { show } = this.props;
    if (!show) {
      return <script />
    }

    return (
      <div>
        <div style={styles} />
        <div style={{zIndex:1001}}>
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}

PageLoading.propTypes = {
  percent: PropTypes.number,
  show: PropTypes.bool.isRequired,
  hideLoading: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state.ui.loading
});

export default connect(
  mapStateToProps,
  { hideLoading: hideLoadingAction }
)(PageLoading);
