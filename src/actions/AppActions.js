export function increment() {
  this.dispatch({type: 'INCREMENT'})
}

export function decrement() {
  this.dispatch({type: 'DECREMENT'})
}

