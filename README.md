# useEffect

## Coding Exercises based on useEffect different use cases

### Exercise 1: Connecting to an External System

**Objective**: Create a component that subscribes to a WebSocket server when it mounts and cleans up the subscription when it unmounts. The component should display messages received from the WebSocket server.

**1. Setup**

-   Use a WebSocket echo server such as wss://echo.websocket.org for simplicity.

**2. Components**

-   Create a WebSocketComponent that connects to the WebSocket server.
-   Display messages received from the server.
-   Clean up the WebSocket connection when the component unmounts.
