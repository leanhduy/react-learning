import React, { useState } from 'react'

const SimpleCounter = () => {
    const [counter, setCounter] = useState(0)

    // When counter is greater than 2, throw an error to test the error boundary
    if (counter > 2) throw new Error('Counter cannot be greater than 2!')
    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button
                onClick={() => {
                    setCounter((c) => c + 1)
                }}
            >
                increase
            </button>
        </div>
    )
}

export default SimpleCounter
