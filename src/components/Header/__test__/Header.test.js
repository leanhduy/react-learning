import { screen, render } from '@testing-library/react'
import Header from '../Header'

it('should render header with provided title prop', () => {
    const title = 'Testing'
    render(<Header title={title} />)
    const header = screen.getByText(/Testing/i)
    expect(header).toBeInTheDocument()
})
