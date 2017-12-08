import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'

/* create store */
const store = createStore(counter);

/* actions */
function handleIncrement() {
  store.dispatch({ type: 'INCREMENT' });
};

function handleDecrement(){
  store.dispatch({ type: 'DECREMENT' });
};

/* reducer */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state
  }
}

function renderApp() {
  ReactDOM.render(<App counter={store.getState()} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />, document.getElementById('root'));
};

/* render on page load */
renderApp();

/* subscribe to data changes */
store.subscribe(() => {
  console.log('update')
  renderApp()
});

registerServiceWorker();
