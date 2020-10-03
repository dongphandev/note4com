import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { submit } from './actions';
import AppActions from '../../app/actions';
import * as Utils from '../../utils';

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (props.authenticated) {
    return <Redirect to='/page/notes' />
  }

  const isValid = () => {
    return Utils.isNotEmtpy(username) && Utils.isNotEmtpy(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      props.submit(username, password);
    } else {
      props.showNotification("Please input 'Email' and 'Password'");
    }
  };

  return (
    <div className="container" style={{maxWidth:500}}>
      <h1>Sign In</h1>
      <h4>Welcome to note4com!</h4>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
            onChange={(e)=>{setUsername(e.target.value)}}
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state.signin,
  authenticated: state.auth.authenticated
});

export default connect(
  mapStateToProps,
  { submit, showNotification: AppActions.UI.showNotification }
)(SignIn);