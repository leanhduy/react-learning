import styled from '@emotion/styled'
import { Button, Container } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(100)
    const [running, setRunning] = useState(false)
    const intervalRef = useRef(null)

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setTimer((prev) => prev - 0.1)
            }, 100)
        } else if (!running && intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [running])

    const handleStart = () => {
        setRunning(true)
    }

    const handleStop = () => {
        setRunning(false)
        setTimer(100)
    }

    return (
        <StyledContainer>
            <h4>
                Usecase 7: Reading the latest props and state from an Effect
            </h4>
            <p>Current timelapse: {timer.toString().slice(0, 4)}</p>
            <ButtonGroup>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleStart}
                >
                    Start
                </Button>
                <Button variant="contained" color="error" onClick={handleStop}>
                    Stop
                </Button>
            </ButtonGroup>
        </StyledContainer>
    )
}

export default Timer

const StyledContainer = styled(Container)({
    textAlign: 'center',
})

const ButtonGroup = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
})
