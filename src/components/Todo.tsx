import React from 'react'
import { useDispatch } from 'react-redux'
import { TodoType } from '../types'
import { toggleTodo, deleteTodo } from '../store/todoSlice'

export function Todo({ todo, index }: { todo: TodoType; index: number }) {
  const toggleText = todo.isCompleted ? 'Redo' : 'Complete'
  const dispatch = useDispatch()
  return (
    <div className="todo" data-testid="todo-item" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
      {todo.text}

      <div>
        <button onClick={() => dispatch(toggleTodo(index))}>{toggleText}</button>
        <button data-cy="remove" data-testid="remove-todo" onClick={() => dispatch(deleteTodo(index))}>
          x
        </button>
      </div>
    </div>
  )
}
