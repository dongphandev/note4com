import React from 'react';
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

import AuthSelector from '../../../store/auth/selectors';

function Auth() {
  const authState = useSelector(AuthSelector.state);

  console.log(authState);

  if (!authState.authenticated) {
    return <Redirect to='/login' />
  }

  return (
    <span id="auth_token" style={{display: "none"}} >{authState.token}</span>
  );
}


export default Auth;