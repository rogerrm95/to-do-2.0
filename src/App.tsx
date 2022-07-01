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
  const [tasks, setTasks] = useState<Task[]>([])
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
  function handleAddNewTask() {
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
  }

  // Exclui uma determinada tarefa da lista //
  function handleDeleteTask(idTask: number) {
    const newList = tasks.filter(task => task.id !== idTask)
    setTasks(newList)
  }

  // Ordena o array deixando as tarefas ativas em cima e as finalizadas em baixo //
  function sortListToActiveTaskAtCompletedTask(tasksList: Task[]) {
    const activeTask = tasksList.filter(task => !task.isDone)
    const completedTask = tasksList.filter(task => task.isDone)

    const sortedList = [...activeTask, ...completedTask]

    return sortedList
  }

  return (
    <div className={styles.App}>
      <Header />

      <main>

        <form className={styles.newTask}>
          <input
            type="text"
            placeholder='Adicione uma nova tarefa ...'
            value={task}
            onChange={(e) => setTask(e.target.value)} />
          <button onClick={handleAddNewTask} type='button'>
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
            tasks.length === 0
              ? <NoResults />
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
    </div>
  )
}

export default App