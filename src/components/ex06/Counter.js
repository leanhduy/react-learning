import styled from '@emotion/styled'
import { Container } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    useState(() => {
        const cId = setInterval(() => {
            setCounter((prev) => prev + 1)
        }, 1000)
        return () => {
            clearInterval(cId)
        }
    }, [])

    return (
        <StyledContainer>
            <h4>
                Usecase 6: Updating state based on previous state from an Effect
            </h4>
            <h6>Counter: {counter}</h6>
        </StyledContainer>
    )
}

export default Counter

const StyledContainer = styled(Container)({
    textAlign: 'center',
})
