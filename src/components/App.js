import { Button, Container, Divider } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import CounterProvider from './exercise1/CounterProvider'
import ThemeProvider from './exercise2/ThemeProvider'
import ThemeToggle from './exercise2/ThemeToggle'
import ThemeButton from './exercise2/ThemeButton'
import UserProvider from './exercise3/UserProvider'
import UserProfile from './exercise3/UserProfile'
import Authentication from './exercise3/Authentication'
function App() {
    const [exercise, setExercise] = useState(1)
    const [children, setChildren] = useState(null)

    useEffect(() => {
        switch (exercise) {
            case 1:
                setChildren(<CounterProvider />)
                break
            case 2:
                const ex2 = (
                    <ThemeProvider>
                        <ThemeToggle />
                        <ThemeButton />
                    </ThemeProvider>
                )
                setChildren(ex2)
                break
            default:
                const ex3 = (
                    <UserProvider>
                        <Authentication />
                        <UserProfile />
                    </UserProvider>
                )
                setChildren(ex3)
                break
        }
    }, [exercise])

    return (
        <Container>
            <h1>Context hook - Exercises</h1>
            <Button
                onClick={() => {
                    setExercise(1)
                }}
                sx={{ mx: 2, my: 3 }}
                color="success"
                variant="contained"
            >
                Exercise 1
            </Button>
            <Button
                onClick={() => {
                    setExercise(2)
                }}
                sx={{ mx: 2, my: 3 }}
                color="warning"
                variant="contained"
            >
                Exercise 2
            </Button>
            <Button
                onClick={() => {
                    setExercise(3)
                }}
                sx={{ mx: 2, my: 3 }}
                color="error"
                variant="contained"
            >
                Exercise 3
            </Button>
            <Divider sx={{ my: 2 }} />
            {children}
        </Container>
    )
}

export default App
