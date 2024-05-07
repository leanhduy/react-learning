// The custom hook for fetching 500 comments

import { useEffect } from 'react'
import { useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com/comments'
export const useComments = () => {
    const [comments, setComments] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch(url)
            if (!res.ok) {
                setError('Connection Error')
                setComments([])
            } else {
                let data = await res.json()
                setComments(data)
                setError(null)
            }
        }
        fetchComments()
    }, [])

    return [comments, error]
}
