import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TodoFooter from '../TodoFooter'
import { BrowserRouter } from 'react-router-dom'

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

describe('TodoFooter', () => {
    it('should render "tasks" if number of incomplete tasks greater than 1', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />)
        const pEl = screen.getByRole('paragraph')
        expect(pEl.textContent).toBe('5 tasks left')
    })
    it('should render "task" if number of incomplete task is 1', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />)
        const pEl = screen.getByText(/1 task left/i)
        expect(pEl).toBeInTheDocument()
    })
})
