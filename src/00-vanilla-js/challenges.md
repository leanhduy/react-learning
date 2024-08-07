# VanillaJS Problems

## Problem: Type Utilities

### Descriptions

-   JavaScript is a dynamically typed language = **the types of variable can be changed during runtime.**
-   Knowledge of handling the JavaScript types is crucial to solving questions like **Deep Clone** and **Deep Equal**.

### Requirements

Implement the following utility functions to determine the types of primitive values.

-   `isBoolean(value)`: Return `true` if value is a boolean, `false` otherwise.
-   `isNumber(value)`: Return `true` if value is a number, `false` otherwise. Note that NaN is considered a number.
-   `isNull(value)`: Return `true` if value is null, `false` otherwise.
-   `isString(value)`: Return `true` if value is a String, else `false`.
-   `isSymbol(value)`: Return `true` if value is a Symbol primitive, else `false`.
-   `isUndefined(value)`: Return `true` if value is undefined, else `false`.

### Starter Code

-   see `starter.js`

---

## Problem: Stack

### Requirements

Implement a stack data structure in JavaScript that contains the following operations:

-   `new Stack()`: Creates an instance of a `Stack` class that doesn't contain any items. The constructor does not accept any arguments.
-   `push()`: Pushes an item onto the top of the stack and returns the new length of the stack. Required time complexity: O(1).
-   `pop()`: Removes an item at the top of the stack and returns that item. Required time complexity: O(1).
-   `isEmpty()`: Determines if the stack is empty. Required time complexity: O(1).
-   `peek()`: Returns the item at the top of the stack without removing it from the stack. Required time complexity: O(1).
-   `length()`: Returns the number of items in the stack. Required time complexity: O(1).

### Starter Code

-   see `starter.js`

---

## Problem: Make Counter

### Requirements

Implement a function `makeCounter` that accepts an optional integer value and returns a function. When the returned function is called initially, it returns the initial value if provided, otherwise 0. The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.

### Examples

```javascript
const counter = makeCounter()
counter() // 0
counter() // 1
counter() // 2
```

```javascript
const counter = makeCounter(5)
counter() // 5
counter() // 6
counter() // 7
```

### Starter Code

-   see `starter.js`

---

## Problem: Mean

### Requirements

Implement a function `mean(array)` that returns the mean (also known as average) of the values inside array, which is an array of numbers.

**Arguments**

-   array (Array): Array of numbers.

**Returns**

-   (Number): Returns the mean of the values in array.

### Examples

```javascript
mean([4, 2, 8, 6]) // => 5
mean([1, 2, 3, 4]) // => 2.5
mean([1, 2, 2]) // => 1.6666666666666667
```

```javascript
mean([]) // => NaN
```

### Starter Code

-   see `starter.js`

### Further reading

-   [Lodash \_.mean](https://lodash.com/docs/#mean)

---

## Problem: MinBy

### Requirements

Implement a function `minBy(array, iteratee)` that finds the element inside `array` with the minimum value after going through `iteratee`.

**Arguments**

-   `array` (Array): The array to iterate over.
-   `iteratee` (Function): The iteratee invoked per element, which is a function that accepts one argument: (value).

**Returns**

-   `(*)`: the minimum value

### Examples

```javascript
minBy([2, 3, 1, 4], (num) => num) // => 1

minBy([{ n: 1 }, { n: 2 }], (o) => o.n) // => { n: 1 }
```

```javascript
minBy([{ n: 1 }, { n: 2 }], (o) => o.m) // => undefined
```

### Starter Code

-   see `starter.js`

### Further reading

-   [Lodash \_.minBy](https://lodash.com/docs/4.17.15#minBy)

---

## Problem: Cycle

### Requirements

Implement a function that takes one or more values and returns a function that cycles through those values each time it is called.

### Examples

```javascript
const helloFn = cycle('hello')
console.log(helloFn()) // "hello"
console.log(helloFn()) // "hello"

const onOffFn = cycle('on', 'off')
console.log(onOffFn()) // "on"
console.log(onOffFn()) // "off"
console.log(onOffFn()) // "on"
```

### Starter Code

-   see `starter.js`

### Further reading

-   [Lodash \_.minBy](https://lodash.com/docs/4.17.15#minBy)

---
