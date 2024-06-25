import styled from '@emotion/styled'
import Board from './Game'
import History from './History'

function App() {
    return (
        <Container>
            <Board />
            <History />
        </Container>
    )
}

export default App

const Container = styled.div({
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    margin: '5rem auto',
})
