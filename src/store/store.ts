import { combineReducers, createStore } from 'redux';
import { messangerReducer } from './reducer';
import { Messanger } from '../interfaces/interface';
// import { Messanger } from '../interfaces/interface';

const rootReducer = combineReducers({
  messanger: messangerReducer,
});

export const store = createStore(rootReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type ReducerType = typeof messangerReducer;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// const configureStore = (preloadedState?: any) => createStore(rootReducer, preloadedState, applyMiddleware(...middleware) );
