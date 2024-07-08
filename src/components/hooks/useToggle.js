import { useState } from 'react'

const useToggle = () => {
    const [isToggled, setToggled] = useState(false)
    const toggle = () => {
        setToggled((t) => !t)
    }
    return [isToggled, toggle]
}

export default useToggle
