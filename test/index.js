import test from 'tape'
import Stack from '../src/stack-test.js'

const stack = Stack.stackTest

test('push', t => {
  const s = stack()
  s.push(1)
  t.equal(s.state[0], 1)
  s.push(2)
  t.equal(s.state[1], 2)
  t.end()
});

test('pop', t => {
  const s = stack()
  s.push(1)
  t.equal(s.pop(), 1)
  s.push(1)
  s.push(2)
  t.equal(s.pop(), 2)
  t.end()
});

test('isEmpty', t => {
  const s = stack()
  s.push(1)
  t.equal(s.isEmpty(), false)
  t.equal(s.state.length, 1)
  s.pop()
  t.equal(s.isEmpty(), true)
  t.equal(s.state.length, 0)
  t.end()
});

test('clear', t => {
  const s = stack()
  s.push(1)
  t.equal(s.state[s.state.length - 1], 1)
  s.clear()
  t.equal(s.state.length, 0)
  t.end()
});

test('getLength', t => {
  const s = stack()
  s.push(1)
  t.equal(s.state.length, 1)
  s.push(2)
  t.equal(s.state.length, 2)
  s.clear()
  t.equal(s.state.length, 0)
  t.end()
});

test('current', t => {
  const s = stack()
  s.push(1)
  t.equal(s.current(), 1)
  t.equal(s.state[s.state.length - 1], 1)
  s.push(2)
  t.equal(s.current(), 2)
  t.equal(s.state[s.state.length - 1], 2)
  t.end()
});

test('getValues', t => {
  const s = stack()
  t.equal(s.getValues().length, 0)
  s.push(1)
  t.equal(s.getValues()[0], 1)
  s.push(2)
  t.equal(s.getValues().length, 2)
  t.equal(s.getValues()[1], 2)
  s.clear()
  t.equal(s.getValues().length, 0)
  t.end()
});
