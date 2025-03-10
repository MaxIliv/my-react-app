import { createSlice, configureStore, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store';

export type User = {
  name: string;
  id: number;
}

type State = {
  users: User[];
}

const initialState: State = {
  users: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<User>) => {
      state.users.push({ 
        name: action.payload.name,
        id: action.payload.id,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAsync.pending, () => {
        console.log('addAsync pending');
      })
      .addCase(addAsync.rejected, () => {
        console.log('addAsync rejected');
      })
      .addCase(addAsync.fulfilled, (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    });
  },
})

export const addAsync = createAsyncThunk(
  'users/addAsync',
  async (user: User) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return user;
  }
)

export const { add } = usersSlice.actions;
export const selectUsers = (state: RootState) => state.users.users;
export const selectUsersCount = (state: RootState) => state.users.users.length;
export default usersSlice.reducer