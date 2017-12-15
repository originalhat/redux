const INITIAL_STATE = {name: 'devin', value: 0};

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return Object.assign(
        {...state},
        name(state, action)
      );
    case 'INCREMENT_COUNTER':
      return Object.assign(
        {...state},
        counter(state, action)
      );
    case 'DECREMENT_COUNTER':
      return Object.assign(
        {...state},
        counter(state, action)
      );
    default:
      return state;
  }
}

const name = (state, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {name: action.name};
    default:
      return state;
  }
};

const counter = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {value: state.value + 1};
    case 'DECREMENT_COUNTER':
      return {value: state.value - 1};
    default:
      return state;
  }
};
