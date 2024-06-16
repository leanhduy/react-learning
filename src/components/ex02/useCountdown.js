import { useEffect, useRef, useState } from 'react'

export const useCountdown = (initValue) => {
    const [isRunning, setIsRunning] = useState(false)
    const [timer, setTimer] = useState(initValue)
    const timerRef = useRef(null)
    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTimer((t) => t - 1)
            }, 1000)
        }

        return () => {
            clearInterval(timerRef.current)
        }
    }, [isRunning])

    const handleStart = () => {
        setIsRunning(true)
    }

    const handlePause = () => {
        setIsRunning(false)
    }

    const handleReset = () => {
        setIsRunning(false)
        setTimer(initValue)
    }

    return [timer, isRunning, handleStart, handlePause, handleReset]
}
