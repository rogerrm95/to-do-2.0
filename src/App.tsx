// Icones //
import { FiPlusCircle } from 'react-icons/fi'
// Componentes //
import { Header } from './components/Header'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Header />

      <main>

        <form className={styles.newTask}>
          <input type="text" placeholder='Adicione uma nova tarefa ...'/>
          <button>
            Criar <FiPlusCircle size={15} color="#F2F2F2"/>
          </button>
        </form>
        
        {
          // Qtd de tarefas | - | Progresso //
          
          // Lista de Tarefas //
        }

      </main>
    </div>
  )
}

export default App
