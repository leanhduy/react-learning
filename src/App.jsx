import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Banner } from '@/components'
import { FollowersPage, TodoPage } from '@/pages'

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
