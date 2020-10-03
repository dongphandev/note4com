import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submit } from './actions';

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(username, password);
  }

  return (
    <div className="container" style={{maxWidth:500}}>
      <h1>Sign In</h1>
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
  ...state.signin
});

export default connect(
  mapStateToProps,
  { submit }
)(SignIn);