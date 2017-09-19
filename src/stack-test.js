import stack from './stack.js'

stack.stackTest = () => {
  const state = []
  const s = stack(state)
  return Object.assign({}, s, {state})
}

export default stack
