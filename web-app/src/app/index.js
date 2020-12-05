import React from 'react';

import Auth from './modules/Auth';
import Notification from './modules/UI/Notification';
import PageLoading from './modules/UI/PageLoading';
import Header from './modules/Header';

import './styles.scss'

function App(props) {
  return (
    <div className="app">
      <Auth />
      <Notification />
      <PageLoading />
      <Header />
      {props.children}
    </div>
  );
}

export default App;
