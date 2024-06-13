import React, { useEffect, useReducer, useState } from 'react'
import { initTodos } from '../../data.js'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { TODO_VIEW_MODE, generateUniqueId } from '../../helpers.js'
import Todo from './Todo.js'

// * Reducer function
const todoReducer = (todos, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...todos,
                { id: generateUniqueId(), name: action.name, completed: false },
            ]
        case 'complete':
            return todos.map((t) => {
                if (t.id === action.id) {
                    return { ...t, completed: true }
                }
                return t
            })
        case 'remove':
            return todos.filter((t) => t.id !== action.id)
        default:
            return todos
    }
}

const TodoUseReducer = () => {
    const [todos, dispatch] = useReducer(todoReducer, initTodos)
    const [viewMode, setViewMode] = useState(TODO_VIEW_MODE.ALL)
    const [filteredTodos, setFilteredTodos] = useState(todos)

    // * Side-effects
    useEffect(() => {
        switch (viewMode) {
            case TODO_VIEW_MODE.COMPLETED:
                setFilteredTodos(todos.filter((t) => t.completed === true))
                break
            case TODO_VIEW_MODE.NOT_COMPLETED:
                setFilteredTodos(todos.filter((t) => t.completed === false))
                break
            default:
                setFilteredTodos(todos)
                break
        }
    }, [viewMode, todos])

    // * Logic handlers
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'add', name: e.target['newTodoInput'].value })
        e.target['newTodoInput'].value = ''
    }

    return (
        <Container>
            <h2>useReducer Version</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" id="newTodoInput" />
            </form>
            <StyledButton
                variant="outlined"
                color="success"
                onClick={() => {
                    setViewMode(TODO_VIEW_MODE.COMPLETED)
                }}
            >
                View Completed
            </StyledButton>
            <StyledButton
                variant="outlined"
                color="warning"
                onClick={() => {
                    setViewMode(TODO_VIEW_MODE.NOT_COMPLETED)
                }}
            >
                View Incompleted
            </StyledButton>
            <StyledButton
                variant="outlined"
                color="info"
                onClick={() => {
                    setViewMode(TODO_VIEW_MODE.ALL)
                }}
            >
                View All
            </StyledButton>
            <StyledList>
                {filteredTodos &&
                    filteredTodos.map((t) => (
                        <Todo key={t.id} todo={t} dispatch={dispatch} />
                    ))}
            </StyledList>
        </Container>
    )
}

export default TodoUseReducer

// * Styled-components
const Container = styled.div({
    margin: '0 auto',
    textAlign: 'center',
})

const StyledList = styled.li({
    listStyleType: 'none',
})

const StyledButton = styled(Button)({
    margin: '1rem',
})
