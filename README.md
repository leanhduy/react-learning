# React Lifecycle Methods

## What are lifecycle methods?

-   Lifecycle methods are different methods that are executed during the life of a component.
-   When implementing a class component, we can access different phases of the component via these methods.
-   With the advent of modern React features, such as functional components and hooks, the use of class components and lifecycle methods is less common now. However, it is still useful when we need to work with legacy React code.

## Main phases

### Mounting: The phase when a React component is mounted onto the DOM

The lifecycle methods included in this phase are:

-   `constructor(props)`: Used for initializing local state and binding event handler methods.
-   `static getDerivedStateFromProps(props, state)`: Used to update state based on props before rendering.
-   `render()`: Returns the JSX to be rendered.
-   `componentDidMount()`: Invoked after the component is mounted to the DOM. Used for initial data fetching, setting up subscriptions, etc.

### Updating: The phase when a React component is re-rendered and updated to the DOM

Lifecycle methods included in this phase are:

-   `static getDerivedStateFromProps(props, state)`: Used to update state based on props before rendering.
-   `shouldComponentUpdate(nextProps, nextState)`: Invoked before re-rendering when new props or state are being received. Used for optimization.
-   `render()`: Returns the JSX to be rendered.
-   `getSnapshotBeforeUpdate(prevProps, prevState)`: Called right before the most recently rendered output is committed to the DOM. Allows capturing information from the DOM.
-   `componentDidUpdate(prevProps, prevState, snapshot)`: Invoked after the component is updated. Used for performing network requests based on the previous state, etc.

### Unmounting: The phase when a React component is removed from the DOM

-   `componentWillUnmount()`: Invoked right before the component is removed from the DOM. Suitable for cleanup logic, such as removing event listeners, cancelling network requests, etc.
