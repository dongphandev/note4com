import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import reducers from './app/reducers';
import routes from './app/routes';

const configureStore = initialState => {
  const middlewares = [ reduxThunk ];
  return applyMiddleware(...middlewares)(createStore)(
      reducers,
      initialState || window.__initialState__,
      window.devToolsExtension ? window.devToolsExtension() : f => f
  );
};

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const renderAppContainer = (RootComponent) => {
  // (https://github.com/reactjs/react-redux/issues/259)
  ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <RootComponent history={history} />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

renderAppContainer(routes);
