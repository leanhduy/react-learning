import { createContext } from 'react'
export const CounterContext = createContext()
export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
})
export const UserContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
})
