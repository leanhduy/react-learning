import { screen, render } from '@testing-library/react'
import App from '../App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
    it('should render a heading contains the text "Testing Library"', () => {
        render(<App />)
        const el = screen.getByText(/Testing Library/i)
        expect(el).toBeInTheDocument()
    })
})
