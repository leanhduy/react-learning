import { useEffect, useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key)
        return storedValue !== null ? JSON.parse(storedValue) : initialValue
    })

    // ? Update the storage whenever the value change

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}
