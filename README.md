# CUSTOM HOOKS

## Basics

-   Custom hooks let you share logic between components
-   Custom hooks share stateful logic, not state
-   Custom hooks re-run every time the component re-renders.
-   Custom hooks should be pure functions.
-   Custom hook is the modern alternatives in React for old technique such as Higher-Order Component, Render Prop
-   Custom hook can call other built-in hooks, such as `useState`, `useEffect`, etc., and returns arbitrary values.

## Naming convention

-   Custom hooks name must start with `use` followed by a capital letter (e.g., `useFetch`)

## Common usecases of custom hooks

-   When there are multiple side effects (implemented using `useEffect`) in the component with common steps, it may be a good idea to extract them into a custom hook.
-   When you find yourself duplicating code across multiple components, especially if it involves complex logic or state management, consider extracting this logic into a custom hook.
-   To keep your components clean and focused on rendering UI by moving side effects and other logic into custom hooks.
