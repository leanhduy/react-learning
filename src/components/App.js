// Usage example in a component
import React, { useState } from 'react'
import { usePrevious } from './hooks'

function App() {
    const [count, setCount] = useState(0)
    const prevCount = usePrevious(count)

    return (
        <div>
            <p>Current: {count}</p>
            <p>Previous: {prevCount}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default App
