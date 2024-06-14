import { Container, ToggleButton } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../context'
import ThemeToggle from '../exercise2/ThemeToggle'

const UserProfile = () => {
    const { user } = useContext(UserContext)
    const { theme } = useContext(ThemeContext)
    return (
        <Container>
            <h3 style={{ color: theme === 'light' ? 'white' : 'brown' }}>
                User Profile
            </h3>
            <p>Name: {user ? user.name : 'guest'}</p>
            <ThemeToggle />
        </Container>
    )
}

export default UserProfile
