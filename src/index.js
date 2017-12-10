import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'

/* create store */
const store = createStore(counter);

/* actions */
function handleIncrement() {
  store.dispatch({type: 'INCREMENT'});
}

function handleDecrement() {
  store.dispatch({type: 'DECREMENT'});
}

/* reducer */
function counter(state = {value: 0}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {value: state.value + 1};
    case 'DECREMENT':
      return {value: state.value - 1};
    default:
      return state
  }
}

function render() {
  ReactDOM.render(
    <App
      value={store.getState().value}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}/>,
    document.getElementById('root'));
}

/* subscribe to data changes */
store.subscribe(render);
render();

registerServiceWorker();
