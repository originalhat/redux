const INITIAL_STATE = {name: 'devin', value: 0};

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({...state}, {value: state.value + 1});
    case 'DECREMENT':
      return Object.assign({...state}, {value: state.value - 1});
    default:
      return state
  }
}
