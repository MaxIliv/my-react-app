import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/usersSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer
  }
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: { users: UsersState}
export type AppDispatch = AppStore['dispatch']