import { createSlice } from '@reduxjs/toolkit'
const initialState = [
  {
    text: 'Learn about React',
    isCompleted: false,
  },
  {
    text: 'Meet friend for lunch',
    isCompleted: false,
  },
  {
    text: 'Build something',
    isCompleted: false,
  },
]

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, isCompleted: false })
    },
    toggleTodo: (state, action) => {
      const todoToFlip = state[action.payload]
      if (todoToFlip) {
        todoToFlip.isCompleted = !todoToFlip.isCompleted
      }
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1)
    },
  },
})
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
