import styled from '@emotion/styled'
import { Box, Button, Divider } from '@mui/material'
import { useState } from 'react'
import WebSocketComponent from './ex01/WebSocketComponent'
import CountdownTimer from './ex02/CountdownTimer'
import DatePicker from './ex03/DatePicker'
import UserList from './ex04/UserList'
import UserPosts from './ex05/UserPosts'
import Counter from './ex06/Counter'
import Timer from './ex07/Timer'
const USECASES = [
    { id: 1, name: 'Connecting to and external system' },
    { id: 2, name: 'Wrapping Effects in custom Hooks' },
    { id: 3, name: 'Controlling a non-React widget' },
    { id: 4, name: 'Fetching data with Effects' },
    { id: 5, name: 'Specifying reactive dependencies' },
    { id: 6, name: 'Updating state based on previous state from an Effect' },
    { id: 7, name: 'Reading the latest props and state from an Effect' },
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
                jsx = <DatePicker />
                break
            case 4:
                jsx = <UserList />
                break
            case 5:
                jsx = <UserPosts userId={2} />
                break
            case 6:
                jsx = <Counter />
                break
            case 7:
                jsx = <Timer />
                break
            default:
                jsx = <h4>Nothing here</h4>
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
                        sx={{ width: '120px', fontSize: '.75rem' }}
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
