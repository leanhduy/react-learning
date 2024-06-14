import React, { useState } from 'react'
import { UserContext } from '../context'
import ThemeProvider from '../exercise2/ThemeProvider'
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const logIn = () => {
        setUser({ name: 'Duy', age: 33 })
    }

    const logOut = () => {
        setUser(null)
    }
    return (
        <UserContext.Provider value={{ user, logIn, logOut }}>
            <ThemeProvider>{children}</ThemeProvider>
        </UserContext.Provider>
    )
}

export default UserProvider
