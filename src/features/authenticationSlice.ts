import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserAuth {
  login: string;
  password: string;
}

const initialAuthentication = {
  isAuthorized: false,
  error: null,
};

export const fetchAuthentication = createAsyncThunk(
  'fetchAuthentication',
  async ({ login, password }: UserAuth, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3000/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: login,
          password: password,
        }),
      });

      if (response.ok) {
        // console.log('Authentication successful');
        const data = await response.json(); // Ответ от сервера, если необходимо
        return data;
      } else {
        throw new Error('Authentication failed');
      }
    } catch (error) {
      if (error instanceof Error)
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authenticationSlice = createSlice({
  name: 'authenticationSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialAuthentication,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAuthentication(
      state,
      action: PayloadAction<{
        isAuthorized: boolean;
      }>
    ) {
      state.isAuthorized = action.payload.isAuthorized;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(fetchAuthentication.fulfilled, (state, action) => {
      console.log('ACTION FULLFILFED', action.payload);
      state.isAuthorized = true;
    });
    builder.addCase(fetchAuthentication.rejected, (state, action) => {
      console.log('ACTION rejected', action.payload);

      state.isAuthorized = false;
    });
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { setAuthentication } = authenticationSlice.actions;

// Export the slice reducer as the default export
export default authenticationSlice.reducer;

// TODO: how to make preparation for Message creation Action
// https://redux-toolkit.js.org/api/createslice
// import { createSlice, nanoid } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// interface Item {
//   id: string
//   text: string
// }

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState: [] as Item[],
//   reducers: {
//     addTodo: {
//       reducer: (state, action: PayloadAction<Item>) => {
//         state.push(action.payload)
//       },
//       prepare: (text: string) => {
//         const id = nanoid()
//         return { payload: { id, text } }
//       },
//     },
//   },
// })
