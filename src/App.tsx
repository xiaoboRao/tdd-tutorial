import React, { useEffect, useState } from 'react'
import './App.css'
import { Todo } from './components/Todo'
import { TodoForm } from './components/TodoForm'
import { TodoType } from './types'
import { toggleOneTodo } from './utils/toggleOneTodo'
import './App.css'

function App() {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [loading, setLoading] = useState<Boolean>(false)

  useEffect(() => {
    setLoading(true)
    fetch('/todos')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const toggleTodo = (index: number) => {
    const newTodos = toggleOneTodo(todos, index)
    setTodos(newTodos)
  }

  const removeTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  if (loading) {
    return <div>loading</div>
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App
