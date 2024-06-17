import styled from '@emotion/styled'
import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'

const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Set is loading to true
        setIsLoading(true)
        setError(null)

        const fetchUser = async () => {
            try {
                const response = await fetch(USERS_ENDPOINT)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setUsers([...users, ...data])
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchUser()
    }, [])

    return (
        <StyledContainer>
            <h4>Usecase 4: Fetching Data with Effects</h4>
            <ul>
                {users &&
                    users.map((u) => (
                        <StyledListItem key={u.id}>
                            Name: {u.name}
                        </StyledListItem>
                    ))}
            </ul>
            {isLoading && <p style={{ color: 'green' }}>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </StyledContainer>
    )
}

export default UserList

const StyledContainer = styled(Container)({
    textAlign: 'center',
})

const StyledListItem = styled.li({
    listStyleType: 'none',
})
