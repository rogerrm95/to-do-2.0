import { render, screen } from '@testing-library/react'
import { NoResults } from '.'

describe('NoResults Component', () => {
    it('renders correctly', () => {
        render(<NoResults />)

        expect(screen.getByText('Crie tarefas e organize seus itens a fazer')).toBeInTheDocument()
    })
})