import { useRef, useState } from 'react'

const withLogging = (Component) => {
    return (props) => {
        const logId = useRef(1)
        // * Logging by console.log everytime the Component is re-rendered
        console.log(
            `Log #${logId.current}: Component with props ${JSON.stringify(
                props?.username
            )} is re-rendered`
        )
        logId.current += 1
        return <Component {...props} />
    }
}

const User = ({ username }) => {
    return <h5>{username}</h5>
}

const UserWithLogging = withLogging((props) => <User {...props} />)

function App() {
    const [counter, setCounter] = useState(1)
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
