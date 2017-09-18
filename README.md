# Stack

An ES6 implementation of a stack

## Usage

```
$ npm install ck-stack
```

```javascript
import stack from 'ck-stack';
```

```javascript
<script type='text/javascript' src='/dist/ck-stack.js'></script>
<script type='text/javascript' src='/dist/ck-stack.min.js'></script>
```

```javascript
const s = stack()

s.push(1)
s.push(2)
s.push(3)

s.getValues()
// => [1, 2, 3]   - this is a copy of the stack array

s.isEmpty()
// => false

s.current()
// => 3

s.pop()
// => 3

s.current()
// => 2

s.clear()
s.getValues
// => []

s.isEmpty()
// => true
```
