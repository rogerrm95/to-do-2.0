import { FiCheck, FiTrash } from "react-icons/fi";
import styles from './styles.module.css'

// TYPES //
interface TaskItemProps {
    name: string,
    isDone: boolean
}

export function TaskItem({ isDone, name }: TaskItemProps) {
    return (
        <li className={styles.taskItem}>
            <button className={isDone ? `${styles.checkedButton}` : `${styles.checkButton}`}>
                {isDone && <FiCheck size={12} />}
            </button>

            <p className={isDone ? `${styles.textTicked}` : ''}>
                {name}
            </p>

            <button className={styles.deleteButton}>
                <FiTrash size={16} />
            </button>
        </li>
    )
}