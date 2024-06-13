import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Todo from '../useState/Todo'
import { initTodos } from '../../data'
import { generateUniqueId, TODO_VIEW_MODE } from '../../helpers'

const TodoUseState = () => {
    const [viewMode, setViewMode] = useState(TODO_VIEW_MODE.ALL)
    const [todos, setTodos] = useState(initTodos)
    const [filteredTodos, setFilteredTodos] = useState(todos)

    // * Logic handlers
    const handleSubmit = (e) => {
        e.preventDefault()

        // ? Add new todo into the list
        const newTodos = {
            id: generateUniqueId(),
            name: e.target.newTodoInput.value,
            completed: false,
        }
        setTodos((prev) => [...prev, newTodos])

        // ? Reset the form
        e.target.newTodoInput.value = ''
    }

    const handleRemoveTodo = (todo) => {
        const newTodos = todos.filter((t) => t.id !== todo.id)
        setTodos(newTodos)
    }

    const handleMarkCompleted = (todo) => {
        const newTodos = todos.map((t) => {
            if (t.id === todo.id) {
                return { ...t, completed: true }
            }
            return t
        })
        setTodos(newTodos)
    }

    // * Side-effects.
    // ? Update filteredTodos everytime setTodos is changed
    useEffect(() => {
        let filtered = []
        // ? Update the todos
        switch (viewMode) {
            case TODO_VIEW_MODE.COMPLETED:
                filtered = todos.filter((t) => t.completed === true)
                break
            case TODO_VIEW_MODE.NOT_COMPLETED:
                filtered = todos.filter((t) => t.completed === false)
                break
            default:
                filtered = todos
                break
        }
        // ? Update the `filteredTodos` state
        setFilteredTodos(filtered)
    }, [viewMode, todos])

    return (
        <Container>
            <h2>useState Version</h2>
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
                View completed
            </StyledButton>
            <StyledButton
                variant="outlined"
                color="warning"
                onClick={() => {
                    setViewMode(TODO_VIEW_MODE.NOT_COMPLETED)
                }}
            >
                View incompleted
            </StyledButton>
            <StyledButton
                variant="outlined"
                color="info"
                onClick={() => {
                    setViewMode(TODO_VIEW_MODE.ALL)
                }}
            >
                View all
            </StyledButton>
            <StyledList>
                {filteredTodos &&
                    filteredTodos.map((t) => (
                        <Todo
                            key={t.id}
                            todo={t}
                            removeTodo={handleRemoveTodo}
                            markCompleted={handleMarkCompleted}
                        />
                    ))}
            </StyledList>
        </Container>
    )
}

export default TodoUseState

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
