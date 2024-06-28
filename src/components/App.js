import { useState } from 'react'
import User from './User'

function App() {
    const [showUser, setShowUser] = useState(false)
    return (
        <>
            <h1>React lifecycle</h1>
            <button
                onClick={() => {
                    setShowUser((prev) => !prev)
                }}
            >
                {showUser ? 'Hide user' : 'Show user'}
            </button>
            {showUser && <User />}
        </>
    )
}

export default App
