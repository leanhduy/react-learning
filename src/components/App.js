import Navbar from './Navbar'
import '../components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default App
