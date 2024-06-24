import { screen, render, fireEvent } from '@testing-library/react'
import { describe, expect, vitest } from 'vitest'
import AddInput from '../AddInput'

// ? Mock the setTodo
const mockSetTodo = vitest.fn()

describe('AddInput', () => {
    it('should render an input with placeholder text of "Add a new task here..."', async () => {
        render(<AddInput todos={[]} setTodos={mockSetTodo} />)
        const inputEl = screen.getByPlaceholderText('Add a new task here...')
        expect(inputEl).toBeInTheDocument()
    })
    it('should be able to type in input', async () => {
        render(<AddInput todos={[]} setTodos={mockSetTodo} />)
        const inputEl = screen.getByPlaceholderText('Add a new task here...')
        fireEvent.change(inputEl, { target: { value: 'Hehe' } })
        expect(inputEl.value).toBe('Hehe')
    })
    it('should have empty input when Add button is clicked', () => {
        render(<AddInput todos={[]} setTodos={mockSetTodo} />)
        const inputEl = screen.getByPlaceholderText('Add a new task here...')
        const addBtn = screen.getByRole('button', { name: 'Add' })
        fireEvent.click(addBtn)
        expect(inputEl.value).toBe('')
    })
})
