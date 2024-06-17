import styled from '@emotion/styled'
import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'

const POST_ENDPOINTS = 'https://jsonplaceholder.typicode.com/posts'

const UserPosts = ({ userId }) => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Set is loading to true
        setIsLoading(true)
        setError(null)

        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    `${POST_ENDPOINTS}?userId=${userId}`
                )
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setPosts(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchPosts()
    }, [userId])

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <StyledContainer>
            <h4>Usecase 5: Specifying Reactive Dependencies</h4>
            <ul>
                {posts &&
                    posts.map((p) => (
                        <StyledListItem key={p.id}>
                            Post #{p.id} - {p.title}
                        </StyledListItem>
                    ))}
            </ul>
        </StyledContainer>
    )
}

export default UserPosts

const StyledContainer = styled(Container)({
    textAlign: 'center',
})

const StyledListItem = styled.li({
    listStyleType: 'none',
})
