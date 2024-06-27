import { useState } from 'react'
import Tooltip from './Tooltip'

function App() {
    const [isVisible, setIsVisible] = useState(false)
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const displayTooltip = (e) => {
        setIsVisible(true)
        const btnCoords = e.target.getBoundingClientRect()
        setCoords({ ...coords, x: btnCoords.left, y: btnCoords.bottom })
    }

    const hideTooltip = () => {
        setIsVisible(false)
    }
    return (
        <div>
            <button onMouseOver={displayTooltip} onMouseLeave={hideTooltip}>
                Hover over this button to show tooltip
            </button>
            {isVisible && <Tooltip coords={coords} />}
        </div>
    )
}

export default App
