import styled from '@emotion/styled'
import React from 'react'

const mockHistory = [
    { id: 1, name: 'Go to game start' },
    { id: 2, name: 'Go to move #1' },
    { id: 3, name: 'Go to move #2' },
    { id: 4, name: 'Go to move #3' },
    { id: 5, name: 'Go to move #4' },
]

const History = () => {
    return (
        <Container>
            <ol>
                {mockHistory.map((h) => (
                    <StyledListItem key={h.id}>
                        <StyledButton>{h.name}</StyledButton>
                    </StyledListItem>
                ))}
            </ol>
        </Container>
    )
}

export default History

const Container = styled.div({
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const StyledListItem = styled.li({
    margin: '.25rem',
    listStyleType: 'none',
})

const StyledButton = styled.button({
    width: '150px',
    borderRadius: '10px',
})
