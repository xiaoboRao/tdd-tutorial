import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'

export const store = configureStore({
  reducer: combineReducers({ todo: todoSlice }),
})
