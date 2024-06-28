# Higher Order Component

## What is HOC?

-   HOC stands for Higher Order Component, is not particular a React feature, but a type of design pattern to leverage the React paradigm.
-   A Higher Order Component is just a function that take one Component and return another component
-   HOC extends the functionality of a Component, reduce repetitive code, made logic reusable in a React app
-   Common usecases of HOC can be:
    -   Conditional Rendering
    -   Styling
    -   Data Fetching
    -   etc.
-   There is a note that with the introduction of modern React (hooks, functional component), HOC is considered an old practice, and other approaches are recommended to solve problem that previously solved by HOC, such as render props or custom hook.

### Coding exercise 1

-   Create an HOC named `withLogging` that takes a component and logs a message every time the component renders.
-   Create a simple `User` component that displays a user's name.
-   Use the `withLogging` HOC to create a new component that logs a message every time it renders.
-   Render the original `User` component and the new component created by `withLogging`
