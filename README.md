# React Memo

This branch is about `React.memo` and `useMemo()` hook

## What is React.memo?

-   _Purpose_: React.memo is a higher-order component that can be used to optimize performance by memoizing a component, preventing it from re-rendering if its props have not changed. This is particularly useful for components that are expensive to render.
-   _Syntax_:
    `const MemoizedComponent = React.memo(Component);`

## What is useMemo?

-   _Purpose_: The useMemo hook is used to memoize a value that is expensive to compute, preventing unnecessary recalculations when the component re-renders.
-   _Syntax_:
    `const cachedValue = useMemo(expensiveFunction, dependencyArray);`
    -   `expensiveFunction`: The function that computes the value to be memoized.
    -   `dependencyArray`: An array of dependencies that, when changed, will cause the expensiveFunction to be re-executed and the cached value to be updated.

## Coding Exercises

### Exerise 1

-   Implement a `Banner` component that is expensive to render (Hint: use a large loop before returning JSX)
-   Implement a button in `App` component to increase a `counter` state and trigger the re-rendering of `App` and its direct child component
-   Use `React.memo` to memoize the `Banner` and skip re-rendering when `App` is re-rendered.
