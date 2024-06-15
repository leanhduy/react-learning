import styled from '@emotion/styled'
import { Button, Container, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'

const Timer = () => {
    const timerRef = useRef()
    const [counter, setCounter] = useState(0)

    const handleStart = () => {
        if (timerRef.current !== null) return // Prevent clicking start button multiple times, therefore create multiple timers
        const timerId = setInterval(() => {
            setCounter((prev) => prev + 1)
        }, 1000)
        timerRef.current = timerId
    }

    const handleStop = () => {
        // ? Stop the timer by calling clearInterval with the id stored in timerRef
        clearInterval(timerRef.current)
        setCounter(0)
    }

    return (
        <StyledContainer>
            <Typography variant="h3">{counter}</Typography>
            <StyledButton
                variant="contained"
                color="success"
                onClick={handleStart}
            >
                Start
            </StyledButton>
            <StyledButton
                variant="contained"
                color="error"
                onClick={handleStop}
            >
                Stop
            </StyledButton>
        </StyledContainer>
    )
}

export default Timer

const StyledContainer = styled(Container)({
    margin: '1rem auto',
    width: '100%',
})

const StyledButton = styled(Button)({
    margin: '0 1rem',
    width: '150px',
})
