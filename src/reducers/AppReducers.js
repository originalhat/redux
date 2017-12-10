export function counter(state = {name: 'devin', value: 0}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({...state}, {value: state.value + 1});
    case 'DECREMENT':
      return Object.assign({...state}, {value: state.value - 1});
    default:
      return state
  }
}
