import styled from '@emotion/styled'
import { Button, Container, Divider } from '@mui/material'
import { useEffect, useState } from 'react'
import MyForm from './ex01/MyForm'
import PersistentCounter from './ex02/PersistentCounter'
import PreviousValue from './ex03/PreviousValue'
import Timer from './ex04/Timer'
import ForwardRefComponent from './ex05/ForwardRefComponent'

const EXERCISE_NO = [1, 2, 3, 4, 5]

function App() {
    const [usecase, setUsecase] = useState(1)
    const [children, setChildren] = useState(null)

    useEffect(() => {
        let jsx = null
        switch (usecase) {
            case 1:
                jsx = <MyForm />
                break
            case 2:
                jsx = <PersistentCounter />
                break
            case 3:
                jsx = <PreviousValue />
                break
            case 4:
                jsx = <Timer />
                break
            case 5:
                jsx = <ForwardRefComponent />
                break
            default:
                jsx = <MyForm />
                break
        }
        setChildren(jsx)
    }, [usecase])

    return (
        <StyledContainer>
            <h1>React Hook - useRef</h1>
            {EXERCISE_NO.map((e) => (
                <StyledButton
                    key={e}
                    variant="contained"
                    onClick={() => {
                        setUsecase(e)
                    }}
                >{`Exercise ${e}`}</StyledButton>
            ))}
            <Divider />
            <StyledContainer>{children}</StyledContainer>
        </StyledContainer>
    )
}

export default App

const StyledContainer = styled(Container)({
    margin: '2rem auto',
    textAlign: 'center',
    width: '80%',
})

const StyledButton = styled(Button)({
    margin: '1rem 1rem',
})
