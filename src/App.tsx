import { Provider } from 'react-redux';
import { store } from './store/index.js';
import { RenderRoutes } from './router/RenderNavigation.jsx';

function App() {
  return (
    <Provider store={store}>
      <RenderRoutes />
    </Provider>
  );
}

export default App;
