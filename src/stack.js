const push = state =>
  val => state.push(val)

const pop = state => () =>
  state.pop()

const isEmpty = state => () =>
  state.length < 1

const clear = state => () =>
  state.splice(0)

const current = state => () =>
  state[state.length - 1]

const getValues = state => () =>
  [...state]

function main(state) {
  return {
      push: push(state)
    , pop: pop(state)
    , isEmpty: isEmpty(state)
    , clear: clear(state)
    , current: current(state)
    , getValues: getValues(state)
  }
}

function stack(state = false) {
  return main(state || [])
}

export default stack
