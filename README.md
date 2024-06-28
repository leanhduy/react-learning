# Higher Order Component

## What is HOC?

-   HOC stands for Higher-Order Component. It is a pattern in React that involves a function that takes a component and returns a new component with enhanced functionality.
-   HOCs are used to extend the functionality of components, reduce repetitive code, and make logic reusable across a React application.
-   Common usecases of HOC are:
    -   Conditional Rendering
    -   Styling
    -   Data Fetching
    -   Logging
    -   Authentication
    -   etc.
-   **Note**: With the advent of modern React (hooks, functional components), the use of HOCs has decreased in favor of other patterns such as render props and custom hooks.

### Coding exercise 1

-   Create an HOC named `withLogging` that takes a component and logs a message every time the component renders.
-   Create a simple `User` component that displays a user's name.
-   Use the `withLogging` HOC to create a new component that logs a message every time it renders.
-   Render the original `User` component and the new component created by `withLogging`
