import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'

import AuthAction from '../../../../store/auth/actions';
import AuthSelector from '../../../../store/auth/selectors';
import UIAction from '../../../../store/ui/actions';
import AuthService from '../../../../services/auth';
import validate from '../../../../utils/validator';
import constraints from './constraints';
import log from '../../../../utils/log';

function SignIn() {
  const [model, setModel] = useState({});
  const authenticated = useSelector(AuthSelector.isAuthenticated);
  const dispatch = useDispatch();

  if (authenticated) {
    return <Redirect to='/page/notes' />
  }

  
  const handleChange = (e) => {
    setModel({
      ...model,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errs = validate(model, constraints);

    if (validate.isEmpty(errs)) {
      dispatch(UIAction.startProcess('signin', "SigIn..."));
      AuthService.signIn(model.username, model.password)
        .then(data => {
          dispatch(AuthAction.setAuth(data.token, model.username, data));
        })
        .catch(ex => {
          log.error(ex, 'Failed to signin');
          dispatch(UIAction.setMessage('Invalid email or password'));
        })
        .finally(()=>{
          dispatch(UIAction.endProcess('signin'));
        })

    } else {
      dispatch(UIAction.setMessage('Please input "Email" and "Password"'));
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
            name="username"
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}


export default SignIn;