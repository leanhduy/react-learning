import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner/Banner'
import FollowersPage from './pages/FollowersPage/FollowersPage'
import TodoPage from './pages/TodoPage/TodoPage'
import Todo from './components/Todo/Todo'

function App() {
    return (
        <div className="App">
            <Banner />
            <Routes>
                <Route strict exact path="/" element={<TodoPage />} />
                <Route
                    strict
                    exact
                    path="/followers"
                    element={<FollowersPage />}
                />
            </Routes>
        </div>
    )
}

export default App
