import { useState } from 'react'
import { withLogging } from './hoc'

const User = ({ username }) => {
    return <h5>{username}</h5>
}

const UserWithLogging = withLogging((props) => <User {...props} />)

function App() {
    const [_, setCounter] = useState(1)
    return (
        <div>
            <h1>Higher-Order Component</h1>
            <User username="User 1" />
            <UserWithLogging username="User 2" />
            <button
                onClick={() => {
                    setCounter((c) => c + 1)
                }}
            >
                Trigger Re-rendered to check logging
            </button>
        </div>
    )
}

export default App
