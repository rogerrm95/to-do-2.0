import { render, screen, fireEvent } from '@testing-library/react'
import { TaskItem } from '.'

const TaskItemProps = {
    id: 1,
    name: 'Comprar Carro',
    isDone: true,
    onCheck: jest.fn(),
    onDelete: jest.fn()
}

describe('TaskItem Component', () => {
    it('renders correctly', () => {
        render(
            <TaskItem id={TaskItemProps.id} isDone={TaskItemProps.isDone} name={TaskItemProps.name} onCheck={TaskItemProps.onCheck} onDelete={TaskItemProps.onDelete} />)

        expect(screen.getByText('Comprar Carro')).toBeInTheDocument()
    })
})