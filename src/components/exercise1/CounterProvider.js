import { Container, Divider } from '@mui/material'
import React, { useState } from 'react'
import CounterDisplay from './CounterDisplay'
import { CounterContext } from '../context'
import styled from '@emotion/styled'
import IncrementButton from './IncrementButton'

const CounterProvider = () => {
    const [counter, setCounter] = useState(0)
    const increaseCounter = () => {
        setCounter((prev) => prev + 1)
    }
    return (
        <CounterContext.Provider value={{ counter, increaseCounter }}>
            <Container>
                <Title>Counter Provider</Title>
                <CounterDisplay />
                <IncrementButton />
            </Container>
        </CounterContext.Provider>
    )
}

export default CounterProvider

const Title = styled.h3({
    margin: '1rem',
})
