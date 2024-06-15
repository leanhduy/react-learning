import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { useEffect, useRef } from 'react'

const PersistentCounter = () => {
    const counterRef = useRef(0)

    const handleCount = () => {
        counterRef.current += 1
        console.log(`Current counter: ${counterRef.current}`)
    }

    useEffect(() => {
        console.log(`Current counter: ${counterRef.current}`)
    }, [])

    return (
        <form>
            <StyledRow>
                <Button
                    variant="contained"
                    color="warning"
                    onClick={handleCount}
                >
                    Increase Counter
                </Button>
            </StyledRow>
        </form>
    )
}

export default PersistentCounter

const StyledRow = styled.div({
    alignItems: 'stretch',
    columnGap: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
})
