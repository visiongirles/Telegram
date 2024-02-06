import { store } from '../store/';

// Infer`AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
