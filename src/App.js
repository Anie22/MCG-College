import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes} from 'react-router-dom';
import { Home } from './components/Home';
import { Signup } from './components/Accounts/Signup';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route path='' element={ <Home /> }></Route>
          <Route path='signup' element={ <Signup /> }></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
