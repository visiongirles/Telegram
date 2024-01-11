import { Dispatch, createContext, useContext } from 'react';
import { Action } from '../store/actions';

// react context hook for DISPATCH
export const MessangerDispatchContext = createContext<Dispatch<Action>>(
  () => {}
);

// custom react hook for DISPATCH to export
export function useMessangerDispatchContext() {
  return useContext(MessangerDispatchContext);
}
