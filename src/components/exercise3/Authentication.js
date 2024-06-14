import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../context'

const Authentication = () => {
    const { user, logIn, logOut } = useContext(UserContext)
    return (
        <Box>
            {!user && (
                <Button variant="contained" color="success" onClick={logIn}>
                    Log In
                </Button>
            )}
            {user && (
                <Button variant="contained" color="error" onClick={logOut}>
                    Log Out
                </Button>
            )}
        </Box>
    )
}

export default Authentication
