import styled from '@emotion/styled'
import { Box, Button, Divider } from '@mui/material'
import { useState } from 'react'
import WebSocketComponent from './ex01/WebSocketComponent'
import CountdownTimer from './ex02/CountdownTimer'
const USECASES = [
    { id: 1, name: 'Connecting to and external system' },
    { id: 2, name: 'Wrapping Effects in custom Hooks' },
    { id: 3, name: 'Controlling a non-React widget' },
    { id: 4, name: 'Fetching data with Effects' },
    { id: 5, name: 'Specifying reactive dependencies' },
    { id: 6, name: 'Updating state based on previous state from an Effect' },
    { id: 7, name: 'Removing unnecessary object dependencies' },
    { id: 8, name: 'Removing unnecessary function dependencies' },
    { id: 9, name: 'Reading the latest props and state from an Effect' },
    {
        id: 10,
        name: 'Displaying different content on the server and the client',
    },
]
function App() {
    const [usecase, setUsecase] = useState(null)

    const handleSelectUsecase = (u) => {
        let jsx = null
        switch (u.id) {
            case 1:
                jsx = <WebSocketComponent />
                break
            case 2:
                jsx = <CountdownTimer countdownInitValue={60} />
                break
            case 3:
                break
            case 4:
                break
            case 5:
                break
            case 6:
                break
            case 7:
                break
            case 8:
                break
            case 9:
                break
            case 10:
                break
            default:
                break
        }
        setUsecase(jsx)
    }

    return (
        <StyledContainer>
            <h3>UseEffect usages</h3>
            <Header>
                {USECASES.map((u) => (
                    <Button
                        key={u.id}
                        variant="contained"
                        sx={{ width: '120px' }}
                        onClick={() => {
                            handleSelectUsecase(u)
                        }}
                    >
                        Use case {u.id}
                    </Button>
                ))}
            </Header>
            <Divider sx={{ margin: '1rem 0' }} />
            {usecase === null ? <h4>Coming soon</h4> : usecase}
        </StyledContainer>
    )
}

export default App

const StyledContainer = styled(Box)({
    margin: '1rem auto',
    width: '80%',
    textAlign: 'center',
})

const Header = styled.div({
    display: 'flex',
    margin: '1rem auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: '1rem',
    rowGap: '1rem',
})
