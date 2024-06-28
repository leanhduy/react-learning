import { useRef } from 'react'

// * Implement the HOC
export const withLogging = (Component) => {
    // * Log to the console every time the component is rendered
    return (props) => {
        let logId = useRef(0)
        logId.current += 1
        console.log(`Log #${logId.current}: The component is re-rendered`)
        return <Component {...props} />
    }
}
