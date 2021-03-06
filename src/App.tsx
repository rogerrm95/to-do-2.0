import { FormEvent, useEffect, useState } from 'react'
// Icones //
import { FiCheck, FiPlusCircle, FiTrash } from 'react-icons/fi'
// Componentes //
import { Header } from './components/Header'
import { NoResults } from './components/NoResults'
// Styles // 
import styles from './App.module.css'
import { TaskItem } from './components/TaskItem'
import { Footer } from './components/Footer'

// TYPES //
type Task = {
  id: number,
  name: string,
  isDone: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storage = localStorage.getItem('@todolist')

    if (storage) {
      const data = JSON.parse(storage)
      return data
    }

    return []
  })
  const [task, setTask] = useState('')
  const [numberToCompletedTasks, setNumberToCompletedTasks] = useState(0)

  // Verifica a quantidade de tarefas prontas em relação ao total//
  useEffect(() => {
    if (tasks.length === 0) return

    const tasksCompleted = tasks.filter((task) => task.isDone).length
    setNumberToCompletedTasks(tasksCompleted)
  }, [tasks])

  // Ordena as tarefas ao renderizar a lista //
  useEffect(() => {
    const newList = sortListToActiveTaskAtCompletedTask(tasks)
    setTasks(newList)
  }, [])

  // Adiciona uma nova tarefa //
  function handleAddNewTask(e: FormEvent) {
    e.preventDefault()

    if (task.trim().length === 0) {
      setTask('')
      return
    }

    const data = {
      id: tasks.length + 1,
      name: task,
      isDone: false
    }

    const newList = sortListToActiveTaskAtCompletedTask([...tasks, data])

    setTasks(newList)
    setTask('')
    localStorage.setItem("@todolist", JSON.stringify(newList))
  }

  // Marca uma tarefa como concluída ou desmarca //
  function handleCheckedATask(idTask: number) {
    const newList = tasks.map(task => {
      if (task.id === idTask) {
        return {
          ...task,
          isDone: !task.isDone
        }
      } else {
        return task
      }
    })

    const sortedList = sortListToActiveTaskAtCompletedTask(newList)
    setTasks(sortedList)

    localStorage.setItem("@todolist", JSON.stringify(sortedList))
  }

  // Exclui uma determinada tarefa da lista //
  function handleDeleteTask(idTask: number) {
    const newList = tasks.filter(task => task.id !== idTask)
    setTasks(newList)

    localStorage.setItem("@todolist", JSON.stringify(newList))
  }

  // Ordena o array deixando as tarefas ativas em cima e as finalizadas em baixo //
  function sortListToActiveTaskAtCompletedTask(tasksList: Task[]) {
    const activeTask = tasksList.filter(task => !task.isDone)
    const completedTask = tasksList.filter(task => task.isDone)

    const sortedList = [...activeTask, ...completedTask]

    return sortedList
  }

  const hasTasks = tasks.length === 0
  const hasTextInInput = task.length === 0

  return (
    <div className={styles.App}>
      <Header />

      <main>

        <form className={styles.newTask} onSubmit={handleAddNewTask}>

          <input
            type="text"
            placeholder='Adicione uma nova tarefa ...'
            value={task}
            onChange={(e) => setTask(e.target.value)} />

          <button type='submit' disabled={hasTextInInput}>
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
            hasTasks ? <NoResults />
              :
              (
                <ul className={styles.todoList}>
                  {tasks.map(task => (
                    <TaskItem
                      key={task.id}
                      id={task.id}
                      isDone={task.isDone}
                      name={task.name}
                      onDelete={(id) => handleDeleteTask(id)}
                      onCheck={(id) => handleCheckedATask(id)} />
                  ))}
                </ul>
              )
          }
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App