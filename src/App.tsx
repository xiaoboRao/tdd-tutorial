import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { Todo } from './components/Todo'
import { TodoForm } from './components/TodoForm'
import { RootState } from './store/todo'
import './App.css'

function App() {
  const todos = useSelector((state: RootState) => state.todo)
  const [loading, setLoading] = useState<Boolean>(false)

  if (loading) {
    return <div>loading</div>
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm />
      </div>
    </div>
  )
}

export default App
