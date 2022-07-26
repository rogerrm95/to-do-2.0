import { render, screen } from '@testing-library/react'
import { Header } from '.'

jest.mock('../../../assets/logo.png')

describe('Header Component', () => {
    it('renders correctly', () => {
        render(<Header />)

        expect(screen.getByAltText('Todo Logo')).toBeInTheDocument()
    })
})