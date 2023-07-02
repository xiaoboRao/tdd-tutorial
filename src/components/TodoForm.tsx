import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoSlice'

export function TodoForm() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value) return
    // addTodo(value)
    dispatch(addTodo(value))
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={`What's your plan?`}
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  )
}
