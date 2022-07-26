import { render, screen } from '@testing-library/react'
import { App } from '../../App'

jest.mock('../../../assets/logo.png')

describe('Home Page', () => {
    it('renders correctly', () => {
        render(<App />)

        expect(screen.getByAltText('Todo Logo')).toBeInTheDocument()
    })

    
})