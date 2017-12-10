import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import registerServiceWorker from './registerServiceWorker';

import * as Reducers from './reducers/AppReducers';
import * as Actions from './actions/AppActions';

import App from './App';
import './index.css';

/* create store */
const store = createStore(Reducers.counter);

function render() {
  const state = store.getState();

  ReactDOM.render(
    <App
      value={state.value}
      name={state.name}
      handleIncrement={Actions.increment.bind(store)}
      handleDecrement={Actions.decrement.bind(store)}/>,
    document.getElementById('root'));
}

/* subscribe to data changes */
store.subscribe(render);
render();

registerServiceWorker();
