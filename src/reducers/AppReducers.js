const INITIAL_STATE = {name: 'devin', value: 0};

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return Object.assign({...state}, {name: action.name});
    case 'INCREMENT_COUNTER':
      return Object.assign({...state}, {value: state.value + 1});
    case 'DECREMENT_COUNTER':
      return Object.assign({...state}, {value: state.value - 1});
    default:
      return state
  }
}
