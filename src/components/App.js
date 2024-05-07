import { Box, Card, CardContent, Typography, useForkRef } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'

const limit = 10

function App() {
    const [comments, setComments] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchComments = async () => {
        setIsLoading(true)
        setError(null)
        try {
            // const res = await fetch(
            //     `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`
            // )
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/comments'
            )
            let data = await res.json()
            setComments(data)
            setPage((prev) => prev + 1)
            console.log(data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    // const handleScroll = () => {
    //     if (
    //         window.innerHeight + document.documentElement.scrollTop !==
    //             document.documentElement.offsetHeight ||
    //         isLoading
    //     ) {
    //         return
    //     }
    //     fetchComments()
    // }

    useEffect(() => {
        fetchComments()
    }, [])

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [isLoading])

    const handleScroll = () => {
        setScrollTop(document.documentElement.scrollTop)
        if (
            scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight
        ) {
            alert('You reached the end of the page')
        }
    }

    const [scrollTop, setScrollTop] = useState(
        document.documentElement.scrollTop
    )

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollTop])

    return (
        <div>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    backgroundColor: 'black',
                    color: 'white',
                    width: '100%',
                }}
            >
                <p>{scrollTop}</p>
            </div>
            {/* TODO: COMMENT OUT ONCE DONE PLAYING */}
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

export default App
