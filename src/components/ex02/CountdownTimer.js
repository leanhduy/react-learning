import React from 'react'
import styled from '@emotion/styled'
import { Box, Button, Container } from '@mui/material'
import { useCountdown } from './useCountdown'

const CountdownTimer = ({ countdownInitValue }) => {
    const [timer, isRunning, handleStart, handlePause, handleReset] =
        useCountdown(countdownInitValue)

    return (
        <Box>
            <h4>Usecase 2: Wrapping Effects in Custom Hook</h4>
            {/* Timer */}
            <Container>
                <ButtonGroup>
                    <Button
                        variant="contained"
                        color="success"
                        disabled={isRunning}
                        onClick={handleStart}
                    >
                        {timer === 60 ? 'Start' : 'Continue'}
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        disabled={!isRunning}
                        onClick={handlePause}
                    >
                        Pause
                    </Button>
                    <Button
                        variant="contained"
                        disabled={!isRunning && timer === 60}
                        onClick={handleReset}
                    >
                        Reset
                    </Button>
                </ButtonGroup>
                <h5>Timer: {timer}</h5>
            </Container>
        </Box>
    )
}

export default CountdownTimer

const ButtonGroup = styled.div({
    margin: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: '2rem',
})
