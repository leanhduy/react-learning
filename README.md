# React - Error Boundaries

This branch is about `Error Boundary` in React

## Basics

### What is an `Error Boundary`?

-   An `Error Boundary` is a React component that:
    -   catches Javascript occurs anywhere in its children components
    -   log those error messages
    -   displays the Fallback Component UI instead of the component that has errors
-   A React component becomes an `Error Boundary` if it implements either (or both) of the lifecycle methods: the `static getDerivedStateFromError` or the `componentDidCatch`, or both.
    -   `static getDerivedStateFromError` is for rendering the Fallback UI.
    -   `componentDidCatch` is for logging the error message.
-   An `Error Boundary` can only catches error in its children component. It cannot catch the error occur within itself. In such cases, the error will be propagated to the closest parent `Error Boundary` component (similar to how error is handled in `try..catch` block)

### Which errors are not caught by an `Error Boundary`?

-   Event handlers' errors
-   Errors in Asynchronous code (e.g., `setTimeout`)
-   Server side rendering
-   Errors in the `Error Boundary` itself

## How to define an `Error Boundary`

1. Create a class component
2. Implements either lifecycle methods `getDerivedStateFromError` or `componentDidCatch`, or both.
3. Return the JSX for the Fallback UI
4. Wrap the component around the Component tree which the error should be caught and displays the Fallback UI

**Note**

-   To view the Error Boundary in action, you need to simulate running the code in production
    1. Install the serve library with `npm install serve`
    2. Add npm command in the `package.json`
    ```
     "scripts": {
        "serve": "serve -s build"
    },
    ```
    3. Build the project with `npm run build`
    4. Run the project (production mode) with `npm run serve`

