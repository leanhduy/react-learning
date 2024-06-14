import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeContext } from '../context'

const ThemeButton = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white',
            }}
        >
            Button ({theme})
        </Button>
    )
}

export default ThemeButton
