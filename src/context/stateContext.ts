import { createContext, useContext } from 'react';
import { initialMessanger } from '../store/initialMessanger';

// react context hook for STATE
export const MessangerStateContext = createContext(initialMessanger);

// custom react hook for STATE to export
export function useMessangerStateContext() {
  return useContext(MessangerStateContext);
}
