import { useEffect, useState } from 'react'

const useFetch = (endpoint) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(endpoint)
                // Handling HTTP errors that may not throw exception (e.g., 404, 500)
                if (!res.ok) {
                    throw new Error(`Error: ${res.status} ${res.statusText}`)
                }

                const data = await res.json()
                setData(data)
                setError(null)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [endpoint])

    return { data, loading, error }
}

export default useFetch
