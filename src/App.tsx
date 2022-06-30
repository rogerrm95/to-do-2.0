import { useEffect, useState } from 'react'
// Icones //
import { FiCheck, FiPlusCircle, FiTrash } from 'react-icons/fi'
// Componentes //
import { Header } from './components/Header'
import { NoResults } from './components/NoResults'
// Styles // 
import styles from './App.module.css'
import { TaskItem } from './components/TaskItem'

// TYPES //
type Task = {
  id: number,
  name: string,
  isDone: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      name: 'Estudar Javascript, Typescript, Jest, CSS e realizar a o desafio do capítulo 2 - Bootcamp Ignite - 2022',
      isDone: false
    },
    {
      id: 2,
      name: 'Finalizar TCC',
      isDone: true
    }
  ])
  const [numberToCompletedTasks, setNumberToCompletedTasks] = useState(0)

  // Verifica a quantidade de tarefas prontas em relação ao total//
  useEffect(() => {
    if (tasks.length === 0) return

    const tasksCompleted = tasks.filter((task) => task.isDone).length
    setNumberToCompletedTasks(tasksCompleted)
  }, [tasks])

  return (
    <div className={styles.App}>
      <Header />

      <main>

        <form className={styles.newTask}>
          <input type="text" placeholder='Adicione uma nova tarefa ...' />
          <button>
            Criar <FiPlusCircle size={15} color="#F2F2F2" />
          </button>
        </form>


        <div className={styles.tasks}>

          <div className={styles.summaryTasks}>
            <div className={styles.total}>
              <span>Tarefas criadas</span>
              <strong>{tasks.length}</strong>
            </div>

            <div className={styles.progress}>
              <span>Concluídas</span>
              <strong>{tasks.length === 0 ? 0 : `${numberToCompletedTasks} de ${tasks.length}`}</strong>
            </div>
          </div>

          { // Lista de Tarefas //
            tasks.length < 0
              ? <NoResults />
              :
              (
                <ul className={styles.todoList}>
                  {tasks.map(task => {
                    return <TaskItem name={task.name} isDone={task.isDone} key={task.id} />
                  })}
                </ul>
              )
          }

        </div>
      </main>
    </div>
  )
}

export default App