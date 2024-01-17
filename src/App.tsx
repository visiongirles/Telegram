import Main from './components/Main';
import { StateProvider } from './components/StateProvider';

import { Provider } from 'react-redux';

import { store } from './store/store';

function App() {
  return (
    // <StateProvider>
    <Provider store={store}>
      <Main />
    </Provider>
    // </StateProvider>
  );
}

export default App;
