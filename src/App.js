import RoutesApp from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <ToastContainer autoClase={3000} />
      <RoutesApp/>
    </div>
  );
}

export default App;
  