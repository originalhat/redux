import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import {incrementCounter, decrementCounter, updateName} from './actions/AppActions';
import rootReducer from './reducers/AppReducers';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

const store = createStore(rootReducer);

function render_() {
  /* get application state */
  const state = store.getState();

  /* bind actions - a better way to avoid this boilerplate is via react-redux */
  const handleIncrement = () => {store.dispatch(incrementCounter())};
  const handleDecrement = () => {store.dispatch(decrementCounter())};
  const handleUpdateName = (name) => {store.dispatch(updateName({name}))};

  /* render root component */
  ReactDOM.render(
    <App
      value={state.value}
      name={state.name}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleUpdateName={handleUpdateName}
    />,
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
