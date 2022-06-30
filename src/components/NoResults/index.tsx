import { FiFileText } from "react-icons/fi";
import styles from './styles.module.css'

export function NoResults() {
    return (
        <div className={styles.noTasks}>
            <FiFileText size={56} />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong> <br />
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}