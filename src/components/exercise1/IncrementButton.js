import React, { useContext } from 'react'
import { CounterContext } from '../context'
import { Button } from '@mui/material'

const IncrementButton = () => {
    const { increaseCounter } = useContext(CounterContext)
    return (
        <Button variant="contained" onClick={increaseCounter}>
            Increase Counter
        </Button>
    )
}

export default IncrementButton
