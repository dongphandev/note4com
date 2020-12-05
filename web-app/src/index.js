import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './store';
import routes from './app/routes';

const renderAppContainer = (RootComponent) => {
  // (https://github.com/reactjs/react-redux/issues/259)
  ReactDOM.render(
      <Provider store={store}>
        <RootComponent />
      </Provider>,
      document.getElementById('root')
  );
};


renderAppContainer(routes);
