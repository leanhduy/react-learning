import { Container } from '@mui/material'
import React, { useContext } from 'react'
import { CounterContext } from '../context'
import styled from '@emotion/styled'

const CounterDisplay = () => {
    const { counter } = useContext(CounterContext)
    return (
        <Container>
            <Title>Counter Display - Counter: {counter}</Title>
        </Container>
    )
}

export default CounterDisplay

const Title = styled.h4({
    margin: '1rem',
})
