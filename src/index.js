'use strict';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './approot/index';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

store.runSaga(rootSaga);

render(
  <Root store={store} history={history} />,
  document.getElementById('main')
);
