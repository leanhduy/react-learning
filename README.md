# useEffect

## Coding Exercises based on useEffect different use cases

### Exercise 1: Connecting to an External System

**Requirement**: Create a component that subscribes to a WebSocket server when it mounts and cleans up the subscription when it unmounts. The component should display messages received from the WebSocket server.

**1. Setup**

-   Use a WebSocket echo server such as wss://echo.websocket.org for simplicity.

**2. Components**

-   Create a `WebSocketComponent` that connects to the `WebSocket` server.
-   Display messages received from the server.
-   Clean up the `WebSocket` connection when the component unmounts.

### Exercise 2: Wrapping Effects in Custom Hooks

**Requirement**: Create a custom hook that manages a countdown timer. This custom hook should handle starting, pausing, and resetting the timer. Use this custom hook in a component to display the countdown.

**1. Setup**

-   Create a custom hook called `useCountdown`.
-   Create a component called `CountdownTimer` that uses this custom hook to display and control the countdown.

**2. Components**

-   The `CountdownTimer` component should have buttons to start, pause, and reset the countdown.
-   Display the remaining time.

### Exercise 3: Controlling a Non-React Widget

**Requirement**: Create a component that integrates a non-React date picker library (such as Flatpickr). Use `useEffect` to initialize the date picker and clean up when the component unmounts.

**1. Setup**

-   Use the `Flatpickr` date picker library.
-   Install the library using `npm install flatpickr`.
-   Create a component called DatePicker that integrates with Flatpickr.

**2. Components**

-   The DatePicker component should render an input element.
-   Initialize the Flatpickr date picker on the input element using useEffect.
-   Clean up the date picker instance when the component unmounts.

### Exercise 4: Fetching data with effects

**Requirement**: Create a component that integrates a non-React date picker library (such as Flatpickr). Use `useEffect` to initialize the date picker and clean up when the component unmounts.

**1. Setup**

-   Use the `JSONPlaceholder` API to fetch the list of users.
-   Create a UserList component that handles the data fetching, loading, and error states.

**2. Components**

-   The `UserList` component should fetch the data using `useEffect` when the component mounts.
-   Display a loading message while the data is being fetched.
-   Display an error message if the data fetch fails.
-   Display the list of users once the data is successfully fetched.
