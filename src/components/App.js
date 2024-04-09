import Navbar from './Navbar'
import TodosApp from './todo/TodosApp'
import ErrorPage from './ErrorPage'
import Playground from './Playground'
import { Routes, Route } from 'react-router-dom'
import '../components/Navbar'
import Sidebar from './Sidebar'

function App() {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Playground />} />
                <Route path="/todos" element={<TodosApp />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default App
