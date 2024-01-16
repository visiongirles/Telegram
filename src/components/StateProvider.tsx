import type { PropsWithChildren } from 'react';
import { useEffect, useReducer } from 'react';
import { messangerReducer } from '../store/reducer';
import { initialMessanger } from '../store/initialMessanger';
import { MessangerStateContext } from '../context/stateContext';
import { MessangerDispatchContext } from '../context/dispatchContext';
import { webSocketConnection } from '../services/client.js';
import { MessangerAction } from '../store/actions.js';
import { ChatPreview } from '../interfaces/interface.js';

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
