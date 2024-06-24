import { screen, render, fireEvent } from '@testing-library/react'
import { describe, expect, vitest } from 'vitest'
import Todo from '../Todo'
import { BrowserRouter } from 'react-router-dom'

const addTasks = (tasks) => {
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i)
    const addBtn = screen.getByRole('button', { name: 'Add' })
    tasks.forEach((task) => {
        fireEvent.change(inputEl, { target: { value: task } })
        fireEvent.click(addBtn)
    })
}

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

describe('Todo', () => {
    it('should render new task after inputting new text and click Add button', async () => {
        render(<MockTodo />)
        addTasks(['Update CV'])
        const divElement = screen.getByText(/Update CV/i)
        expect(divElement).toBeInTheDocument()
    })

    it('should render a task list with length of 3 after adding 3 tasks', async () => {
        render(<MockTodo />)
        addTasks(['Update CV', 'Ace the interview', 'Get the job'])
        const taskElements = screen.getAllByTestId('task-container')
        expect(taskElements.length).toBe(3)
    })

    it('should not have todo-item-active class when initially rendered', async () => {
        render(<MockTodo />)
        addTasks(['Update CV'])
        const divElement = screen.getByText(/Update CV/i)
        expect(divElement).not.toHaveClass('todo-item-active')
    })

    it('should have todo-item-active class when task is clicked on', async () => {
        render(<MockTodo />)
        addTasks(['Update CV'])
        const divElement = screen.getByText(/Update CV/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass('todo-item-active')
    })
})
