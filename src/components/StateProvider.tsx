import type { PropsWithChildren } from 'react';
import { useReducer } from 'react';
import { messangerReducer } from '../store/reducer';
import { initialMessanger } from '../store/initialMessanger';
import { MessangerStateContext } from '../context/stateContext';
import { MessangerDispatchContext } from '../context/dispatchContext';

// declare StateProvider component
export function StateProvider({ children }: PropsWithChildren) {
  const [messangerState, dispatch] = useReducer(
    messangerReducer,
    initialMessanger
  );

  return (
    <MessangerStateContext.Provider value={messangerState}>
      <MessangerDispatchContext.Provider value={dispatch}>
        {children}
      </MessangerDispatchContext.Provider>
    </MessangerStateContext.Provider>
  );
}
