import { createStore } from 'redux';
import { rootReducer } from '../reducers';
// import { configureStore } from '@reduxjs/toolkit';

// import { messangerReducer } from '../reducers/messangerReducer';

export const store = createStore(rootReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;

// export type ReducerType = typeof messangerReducer;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

// example with configureStore
// const configureStore = (preloadedState?: any) => createStore(rootReducer, preloadedState, applyMiddleware(...middleware) );

// Automatically adds the thunk middleware and the Redux DevTools extension
// const store = configureStore({
//     // Automatically calls `combineReducers`
//     reducer: {
//       posts: postsReducer,
//       users: usersReducer
//     }
//   })
