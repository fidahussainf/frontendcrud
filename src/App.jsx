
import { Provider } from 'react-redux';
import { store } from './store/index';
import AppRouter from './components/Routes/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
export default App;
