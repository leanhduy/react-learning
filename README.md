# Basics

- What is the `useReducer` hook and how does it differ from `useState`?

  - `useReducer` is another built-in hook that is used to manage states of React components
  - It is a more powerful version of the `useState` hook
  - While `useState` hook can only manage one state object, `useReducer` can manage multiple states, with the help of `dispatch` and `reducer` function. Based on the `dispatch` function, it can decide which state will be updated and returned.

- When would you choose to use `useReducer` over `useState`?

  - `useReducer` are more prefered if:
    - There are many states to be managed in a React component.
    - There is a condition of which state will be updated.

- What is the reducer function in the context of `useReducer`?

  - The `reducer` function will decide how and what state will be updated.

- Describe the signature of a `reducer` function. What are its parameters, and what should it return?

  - `reducer` function receives two arguments
    - `state`: the current state
    - `action`: the action which decides which and how state is updated
  - Inside the `reducer` function, it is typical to have a `switch` statement evaluate the `action` value, based on different values, different `state` object will be returned

- How does the `dispatch` function work in `useReducer`?
  - `dispatch` function help to decide which and how state will be updated.
  - When `dispatch` is called, it pass an object contains the necessary data for the update of a state, to the `reducer` function
- What are actions in the context of `useReducer`, how are they typically stuctured?
  - actions are the object passed into the `reducer` function by `dispatch` function
  - This is the common structure of an action
    ```javascript
    {
      type: '...',
      payload: {}
    }
    ```
- How do you provide an initial state to the `useReducer` hook?

  - The `useReducer` is a function that accepts at most 3 arguments:
    - `reducer`: the reducer function
    - `initArg`: an object that will be used to calculate the initial state
    - `init`: an optional callback function that take `initArg` as the argument and return the initial state
  - If `init` is not passed, the intial state will be assigned with `initArg`
  - If `init` is passed, the initial state will be the result of `init(initArg)` method call

- What is the purpose of the `init` function in useReducer, and how is it used?

  - The `init` function is the optional argument of the `useReducer` hook, which will calculate and return the value of the intial state

- Can you use side effects within a reducer function? Why or why not?

  - I don't know. Please help to provide answer

- How would you handle side effects in a comonent that uses `useReducer`?
  - I don't know. Please help to provide answer

## Exercises

Counter Example:

Implement a simple counter component using useReducer. The counter should be able to increment, decrement, and reset its value.
Todo List:

Implement a Todo List component using useReducer. The component should handle adding, removing, and toggling the completion status of todo items.
Form Management:

Create a form component using useReducer to manage the state of multiple form fields. Include functionality for updating field values and resetting the form.
Complex State Transitions:

Implement a shopping cart component using useReducer. The cart should handle adding items, removing items, updating item quantities, and calculating the total price.
Async Actions:

Extend the Todo List component to support async actions, such as fetching todos from an API and handling loading and error states.
Reducer with Middleware:

Implement a logging middleware for your reducer that logs each action and the resulting state. Integrate this middleware with your useReducer implementation.
