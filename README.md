# Basics

-   `useState` is a built-in hooks for state management.
-   `useState` can only be used within a functional component
-   `useState` is a pure Javascript function
-   State mutation must be done via the update function provided by the `useState` hook. State must NOT be mutated directly.

# Syntax

```jsx
import { useState } from 'react'
const [state, setState] = useState(initial_value)
```

-   **Params:** `useState` takes a single parameter
    -   `initial_value`
        -   This is the initial value of the state.
        -   It could be a primitive value, object or array.
-   **Returns: `useState`** returns an array which have exact 2 elements
    -   `state`
        -   the current value of the state
        -   naming convention: descriptive, camelCase (e.g., `firstName`)
    -   `setState`
        -   the updater function for updating the state
        -   naming convention: `set` + PascalCase name (e.g: setName, setFirstName, etc.)

# How to use `useState`?

-   As a hook, `useState` must be called at the top of a React component / custom hook.
-   `useState` can not be called inside:
    -   loops (`for`, `while`, etc.)
    -   conditional statement (`if`, `else`)
    -   other built-in hooks (e.g., `useEffect`)

# Tips

-   **Mutate an array state**

    ```jsx
    const [numbers, setNumbers] = useState([])

    // Add new number `newValue` into `numbers` state
    setNumber((nums) => [...nums, newValue]) // ✅ Correct: use Spread operator

    numbers.push(newValue) // ❌ Incorrect: Direct mutation
    ```

-   **Mutate an object state**

    ```jsx
    const [student, setStudents] = useState(null)

    // Update the property `firstName` of the `student` state
    setStudent({ ...student, firstName: newName }) // ✅ Correct: use Spread operator

    student.firstName = newName // ❌ Incorrect: Direct mutation
    ```

-   **Mutate a state based on the previous state**

    ```jsx
    const [counter, setCounter] = useState(0)

    // Increase the counter by 1 based on certain events, actions (e.g., mouse click)
    setCounter((prev) => prev + 1) // ✅ Correct way to update state. Recommended.

    setCounter(prev + 1) // ⚠️: Works in simple cases, but will be incorrect concurrent rendering (React 18+)

    prev++ // ❌ Incorrect
    ```

# Others

### Stale State

-   **Stale state** is the situation in which state used in a component’s update logic is **_outdated_**, resulting in incorrect / unexpected behaviors.
-   State state can happen in
    -   asynchronous code (`setTimeout`, `fetch`, etc.)
    -   multiple updates are batched together. (e.g., button is clicked too many times in a short amount of time)
-   Solution: Use the functional update form

    ```jsx
    // Instead of
    setState(state + 1)

    // Do this (Funtional update form)
    setState((state) => state + 1)
    ```

### Initial State functions

-   sometime the initial state is the result of a function
-   If the function is expensive, invoke the function directly in the useState will affect performance, because:
    -   the function is executed on every render
    -   but the result of the function is only used once (first render)
-   Solution: use callback function ⇒ The function will only invoked once on the initial render

    ```jsx
    // Instead of
    const [state, setState] = useState(expensiveFunction())

    // Do this...
    const [state, setState] = useState(() => expensiveFunction())
    ```

### Functional Updates

-   sometime the initial state is the result of a function
-   If the function is expensive, invoke the function directly in the useState will affect performance, because:
    -   the function is executed on every render
    -   but the result of the function is only used once (first render)
-   Solution: use callback function ⇒ The function will only invoked once on the initial render

    ```jsx
    // Instead of
    const [state, setState] = useState(expensiveFunction()

    // Do this...
    const [state, setState] = useState(() => expensiveFunction())
    ```

### Multiple State Variables

-   avoid gather states into one single state object (aka God Object), esp. when those states are not related

```jsx
// Instead of
const [godObj, setGodObj] = useState({
    firstName: 'Alex',
    isLoading: false,
    myCatName: 'Wendy',
})

// Do this
const [firstName, setFirstName] = useState('Alex')
const [isLoading, setIsLoading] = useState(false)
const [myCatName, setMyCatName] = useState('Wendy')
```
