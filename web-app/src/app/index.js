import React from 'react';

import Notification from '../modules/UI/Notification';
import PageLoading from '../modules/UI/PageLoading';

import './styles.scss'

function App(props) {
  console.log(props);
  return (
    <div className="app">
      <Notification />
      <PageLoading />

      {props.children}
    </div>
  );
}

export default App;
