import React, { useContext } from 'react'
import { ThemeContext } from '../context'
import { Button } from '@mui/material'

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext)
    return (
        <Button variant="contained" sx={{ m: 3 }} onClick={toggleTheme}>
            Toggle Theme
        </Button>
    )
}

export default ThemeToggle
