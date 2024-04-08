import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import '../components/Navbar'

function App() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default App
