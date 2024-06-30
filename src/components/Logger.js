import { useRef } from 'react'

const Logger = ({ renderProp }) => {
    let logId = useRef(0)
    console.log(`#${logId.current}: Render the prop`)
    logId.current += 1
    return renderProp(logId.current)
}

export default Logger
