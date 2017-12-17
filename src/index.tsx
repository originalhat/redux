import * as Immutable from 'immutable';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux'


import {incrementCounter, decrementCounter, updateName} from './actions/AppActions';
import {rootReducer} from './reducers/AppReducers';

import AppRoot, {AppProps} from './components/AppRoot';

const initialState = Immutable.Map();

/* TODO: better way to handle createStore argument types?  */
const store = createStore<any>(rootReducer as any, initialState as any);

function renderAppRoot() {
    const handleIncrement = () => {
        store.dispatch(incrementCounter())
    };

    const handleDecrement = () => {
        store.dispatch(decrementCounter())
    };

    const handleUpdateName = (name: string) => {
        store.dispatch(updateName(name))
    };

    const appProps: AppProps = {
        name: store.getState().get('name'),
        counter: store.getState().get('counter'),
        handleIncrement,
        handleDecrement,
        handleUpdateName
    };

    ReactDOM.render(
        <AppRoot {...appProps}/>,
        document.getElementById('root'));
}


store.subscribe(renderAppRoot);
renderAppRoot();
