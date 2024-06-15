import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React, { useRef } from 'react'

const PreviousValue = () => {
    const prevValueRef = useRef('')
    const labelRef = useRef(null)

    const handleChange = (e) => {
        console.log(`Previous value: ${prevValueRef.current}`)
        console.log(`Current Value: ${e.target.value}`)
        labelRef.current.textContent = `Prev: ${prevValueRef.current} - Current: ${e.target.value}`
        prevValueRef.current = e.target.value
    }

    return (
        <form>
            <StyledRow>
                <StyledInput onChange={handleChange} />
                <Typography ref={labelRef}></Typography>
            </StyledRow>
        </form>
    )
}

export default PreviousValue

const StyledRow = styled.div({
    alignItems: 'stretch',
    columnGap: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
})

const StyledInput = styled.input({
    borderRadius: '5px',
})
