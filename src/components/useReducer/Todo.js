import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'

const Todo = ({ todo, dispatch }) => {
    return (
        <TodoContainer>
            <TodoName
                className={todo.completed ? 'completed' : ''}
                variant="body"
                sx={{ flexGrow: 1, textAlign: 'left' }}
            >
                {todo.name}
            </TodoName>
            <Button
                color="success"
                onClick={() => {
                    dispatch({ type: 'complete', id: todo.id })
                }}
                disabled={todo.completed}
            >
                Mark done
            </Button>
            <Button
                color="error"
                onClick={() => {
                    dispatch({ type: 'remove', id: todo.id })
                }}
            >
                Delete
            </Button>
        </TodoContainer>
    )
}

export default Todo

const TodoContainer = styled(Box)({
    margin: '1.5rem 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: '1rem',
})
const TodoName = styled(Typography)({
    '&.completed': {
        textDecoration: 'line-through',
    },
})
