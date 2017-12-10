import rootReducer from './AppReducers';
import {INCREMENT, DECREMENT} from '../actions/AppActions';

describe('AppReducers', () => {
  test('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({"name": "devin", "value": 0})
  });

  test('should handle INCREMENT', () => {
    expect(rootReducer({value: 0}, INCREMENT)).toEqual({value: 1});
  });

  test('should handle DECREMENT', () => {
    expect(rootReducer({value: 0}, DECREMENT)).toEqual({value: -1});
  });
});