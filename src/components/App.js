import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import '../components/Navbar'
import Sidebar from './Sidebar'

function App() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Outlet />
        </>
    )
}

export default App
