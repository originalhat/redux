import rootReducer from './AppReducers';
import {incrementCounter, decrementCounter, updateName} from '../actions/AppActions';

describe('AppReducers', () => {
  test('returns the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({"name": "devin", "value": 0})
  });

  test('returns the next state for incrementCounter', () => {
    expect(rootReducer({value: 0}, incrementCounter())).toEqual({value: 1});
  });

  test('returns the next state for decrementCounter', () => {
    expect(rootReducer({value: 0}, decrementCounter())).toEqual({value: -1});
  });

  test('returns the next state for updateName', () => {
    expect(rootReducer(null, updateName({
      name: 'Bill Burr'
    }))).toEqual({
      name: 'Bill Burr'
    })
  });
});