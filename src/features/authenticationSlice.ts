import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserAuth {
  login: string;
  password: string;
}

const initialAuthentication = {
  isAuthorized: false,
  error: null,
};

export const fetchRegistration = createAsyncThunk(
  'fetchRegistration',
  async ({ login, password }: UserAuth, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3000/register', {
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
        const data = await response.json();
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

export const fetchAuthenticationByToken = createAsyncThunk(
  'fetchAuthenticationByToken',
  async (token: string, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3000/authByToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
        }),
      });

      if (response.ok) {
        const data = await response.json();
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
        const data = await response.json();
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
      localStorage.setItem('accessToken', action.payload.token); // TODO: Side effect надо бы убрать?
      state.isAuthorized = true;
    });
    builder.addCase(fetchAuthentication.rejected, (state, action) => {
      console.log('ACTION rejected', action.payload);
      state.isAuthorized = false;
    });
    builder.addCase(fetchRegistration.fulfilled, (state, action) => {
      console.log('ACTION FULLFILFED', action.payload);
      state.isAuthorized = true;
    });
    builder.addCase(fetchRegistration.rejected, (state, action) => {
      console.log('ACTION rejected', action.payload);
      state.isAuthorized = false;
    });
    builder.addCase(fetchAuthenticationByToken.fulfilled, (state, action) => {
      console.log('ACTION FULLFILFED', action.payload);
      state.isAuthorized = true;
    });
    builder.addCase(fetchAuthenticationByToken.rejected, (state, action) => {
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
