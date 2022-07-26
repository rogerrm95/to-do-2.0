import { FiCheck, FiTrash } from "react-icons/fi";
import styles from './styles.module.css'

// TYPES //
interface TaskItemProps {
    id: number
    name: string,
    isDone: boolean,
    onCheck: (id: number) => void,
    onDelete: (id: number) => void,
}

export function TaskItem({ id, isDone, name, onCheck, onDelete }: TaskItemProps) {
    return (
        <li className={styles.taskItem}>
            <button
                className={isDone ? `${styles.checkedButton}` : `${styles.checkButton}`}
                onClick={() => onCheck(id)}>
                {isDone && <FiCheck size={12} />}
            </button>

            <p className={isDone ? `${styles.textTicked}` : ''}>
                {name}
            </p>

            <button className={styles.deleteButton} onClick={() => onDelete(id)} aria-label="delete">
                <FiTrash size={16}/>
            </button>
        </li>
    )
}