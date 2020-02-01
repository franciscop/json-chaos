# JSON Chaos [![npm install json-chaos](https://img.shields.io/badge/npm%20install-json--chaos-blue.svg)](https://www.npmjs.com/package/json-chaos) [![test badge](https://github.com/franciscop/json-chaos/workflows/tests/badge.svg)](https://github.com/franciscop/json-chaos/actions)

Inspired by [Chaos Monkey](https://en.wikipedia.org/wiki/Chaos_engineering), JSON Chaos is a tool that randomly changes properties in objects. It is useful to validate a strict API:

```js
import chaos from 'json-chaos';

const person = { name: 'John', age: 21 };

console.log(chaos(person));
// { name: 45423, age: true }

console.log(chaos(person));
// { name: 1673, age: 'hello' }

console.log(person);  // No mutations
// { name: 'John', age: 21 }
```

It ensures these:

- The Object retains the same structure
- The properties (leafs) change their type

By default it will change up to 100 properties, you can modify this with the second argument:

```js
const person = { name: 'John', age: 21 };

// Change only one of those properties
chaos(person, 1);
```

Useful for testing:

```js
// A valid schema
import demo from './demo';

it('has a strict schema', () => {
  expect(valid(demo)).toBe(true);
  const modified = chaos(demo);
  expect(valid(chaos(demo))).toBe(false);
});
```
