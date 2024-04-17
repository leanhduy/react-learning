import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import '../components/Navbar'
import { useContext, useEffect, useMemo, useState } from 'react'
import { AuthContext } from './todo/utils/context'

function App() {
    const [token, setToken_] = useState(localStorage.getItem('token'))
    const setToken = (newToken) => {
        setToken_(newToken)
    }
    const contextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token]
    )

    useEffect(() => {
        if (token) {
        }
    }, [token])

    return (
        <AuthContext.Provider value={contextValue}>
            <Navbar />
            <Outlet />
        </AuthContext.Provider>
    )
}

export default App
