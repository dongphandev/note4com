import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

function Auth(props) {
  if (!props.authenticated) {
    return <Redirect to='/login' />
  }

  return (
    <span id="auth_token" style={{display: "none"}} >{props.token}</span>
  );
}

const mapStateToProps = state => ({
  ...state.auth
});

export default connect(
  mapStateToProps,
  { }
)(Auth);