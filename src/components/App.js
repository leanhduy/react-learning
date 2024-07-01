import React, { useState } from 'react'
import MyErrorBoundary from './MyErrorBoundary'

const BugCounter = () => {
    const [counter, setCounter] = useState(0)
    if (counter === 2) {
        throw new Error('Bug!')
    }
    return (
        <div>
            <h1>Bug Component - Counter: {counter}</h1>
            <button
                onClick={() => {
                    setCounter((prev) => prev + 1)
                }}
            >
                Throw Error
            </button>
        </div>
    )
}

const App = () => {
    return (
        <MyErrorBoundary>
            <BugCounter />
        </MyErrorBoundary>
    )
}

export default App
