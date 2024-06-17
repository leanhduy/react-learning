import { Box, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import flatpickr from 'flatpickr'
import styled from '@emotion/styled'

const DatePicker = () => {
    const dpRef = useRef()

    useEffect(() => {
        // ? Initiate flatpickr using useEffect at the first render
        const fp = flatpickr(dpRef.current, {})
        return () => {
            // Clean up the Flatpickr instance when the component unmount
            if (fp) {
                fp.destroy()
            }
        }
    }, [])

    return (
        <Box>
            <h4>Usecase 3: Controlling a Non-React Widget (Datepickr)</h4>
            <StyledForm>
                <Typography variant="h6">Pick a date</Typography>
                <input ref={dpRef} />
            </StyledForm>
        </Box>
    )
}

export default DatePicker

const StyledForm = styled.div({
    columnGap: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '1.5rem auto',
})
