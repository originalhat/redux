import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'

/* create store */
const store = createStore(counter);

/* reducer – provides the next state of the application */
function counter(state = {name: 'devin', value: 0}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({...state}, {value: state.value + 1});
    case 'DECREMENT':
      return Object.assign({...state}, {value: state.value - 1});
    default:
      return state
  }
}

function render() {
  const state = store.getState();

  ReactDOM.render(
    <App
      value={state.value}
      name={state.name}
      handleIncrement={() => store.dispatch({type: 'INCREMENT'})}
      handleDecrement={() => store.dispatch({type: 'DECREMENT'})}/>,
    document.getElementById('root'));
}

/* subscribe to data changes */
store.subscribe(render);
render();

registerServiceWorker();
