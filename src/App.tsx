import './assets/styles/styles.css';
import Main from './components/Main';
import { StateProvider } from './components/StateProvider';

function App() {
  return (
    <StateProvider>
      <Main />
    </StateProvider>
  );
}

export default App;
