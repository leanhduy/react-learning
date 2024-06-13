import { useState } from 'react'
import TodoUseReducer from './useReducer/TodoUseReducer'
import TodoUseState from './useState/TodoUseState'
import { Button } from '@mui/material'
import styled from '@emotion/styled'

function App() {
    const [isReducerVersion, setIsReducerVersion] = useState(true)
    const toggleVersion = () => {
        setIsReducerVersion((version) => !version)
    }

    return (
        <Container>
            <h1>TodoList - useState vs useReducer</h1>
            <Button variant="outlined" onClick={toggleVersion}>
                {isReducerVersion
                    ? 'Switch to useState'
                    : 'Switch to useReducer'}
            </Button>
            <div>
                {isReducerVersion ? <TodoUseReducer /> : <TodoUseState />}
            </div>
        </Container>
    )
}

export default App

const Container = styled.div({
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '2rem',
})
