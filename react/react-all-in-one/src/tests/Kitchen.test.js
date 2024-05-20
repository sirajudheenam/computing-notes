import { render, screen } from '@testing-library/react'
import Kitchen from './Kitchen'

test('renders learn react link', () => {
  render(<Kitchen />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
