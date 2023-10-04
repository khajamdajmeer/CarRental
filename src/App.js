import './App.scss';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Home from './Pages/HomePage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route path='/'  element={<Home/>}/>

      </Routes>
    </Router>
   
      </>
  );
}

export default App;
