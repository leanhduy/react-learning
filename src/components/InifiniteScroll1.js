import { Box, Card, CardContent, Typography, useForkRef } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'

const InfiniteScroll1 = () => {
    const [comments, setComments] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)

    const fetchComments = async () => {
        const url = `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`
        setIsLoading(true)
        setError(null)

        try {
            let res = await fetch(url)
            let data = await res.json()
            console.log(data)
            setComments((prevComments) => [...prevComments, ...data])
            setPage((prev) => prev + 1)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop <
                document.documentElement.offsetHeight - 50 ||
            isLoading
        ) {
            return
        }
        fetchComments()
    }

    // Use effect
    useEffect(() => {
        fetchComments()
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isLoading])

    return (
        <div>
            {comments &&
                comments.map((c) => (
                    <Box
                        key={c.id}
                        sx={{ width: '50%', marginBottom: '.5rem' }}
                    >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Comment: {c.id}
                                </Typography>
                                <Typography variant="body2" component="div">
                                    {c.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}

            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    )
}

export default InfiniteScroll1
