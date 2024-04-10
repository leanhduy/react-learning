import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import '../components/Navbar'

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default App
