import {INCREMENT, DECREMENT} from './AppActions';

test('#INCREMENT', () => {
  expect(INCREMENT).toEqual({type: 'INCREMENT'});
});

test('#DECREMENT', () => {
  expect(DECREMENT).toEqual({type: 'DECREMENT'});
});