import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UISelector from '../../../store/ui/selectors';
import UIAction from '../../../store/ui/actions';

function Notification() {
  const message = useSelector(UISelector.state).message;
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(UIAction.setMessage(''));
      }, 5000);
    }
  }, [message]);

  if (!message) {
    return null;
  }

  const handleRequestClose = (e) => {
    e.preventDefault()
    dispatch(UIAction.setMessage(''));
  };

  return (
    <div style={{ position: "absolute", bottom: 0, right: 10, zIndex: 999 }}>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {message}
        <button type="button"
          className="close"
          onClick={handleRequestClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}

export default Notification;