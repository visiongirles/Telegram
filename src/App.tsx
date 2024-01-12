import './assets/styles/styles.css';
// import Main from './components/Test';
import Main from './components/Main';
import { StateProvider } from './components/StateProvider';

function App() {
  return (
    <StateProvider>
      {/* <Main url='https://jsonplaceholder.typicode.com/posts/1' /> */}
      <Main />
    </StateProvider>
  );
}

export default App;
