import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import {INCREMENT, DECREMENT} from './actions/AppActions';
import rootReducer from './reducers/AppReducers';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

const store = createStore(rootReducer);

function render_() {
  const state = store.getState();

  ReactDOM.render(
    <App
      value={state.value}
      name={state.name}
      handleIncrement={() => {store.dispatch(INCREMENT)}}
      handleDecrement={() => {store.dispatch(DECREMENT)}}/>,
    document.getElementById('root'));
}

function subscribeToStoreAndRender_() {
  store.subscribe(render_);
  render_();
}

function startApp_() {
  subscribeToStoreAndRender_();
  registerServiceWorker();
}

startApp_();
