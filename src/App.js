import NavBar from '../src/components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
