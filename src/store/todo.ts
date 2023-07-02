import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'

export const initStore = () =>
  configureStore({
    reducer: combineReducers({ todo: todoSlice }),
  })
// eveery time create a new store
export const store = initStore()

export type RootState = ReturnType<typeof store.getState>
