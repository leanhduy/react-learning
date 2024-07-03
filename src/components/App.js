import { Container } from '@mui/material'
import SimpleCounter from './SimpleCounter'
import ErrorBoundary from './ErrorBoundary'

function App() {
    return (
        <ErrorBoundary>
            <Container>
                <SimpleCounter />
            </Container>
        </ErrorBoundary>
    )
}

export default App
