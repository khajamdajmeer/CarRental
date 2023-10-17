import './App.scss';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutPage from './Pages/AboutPage';
import VechileModels from './Components/VechileModels';
import Models from './Pages/Models';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route path='/'  element={<Home/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/vechilemodels' element={<Models/>}/>
    <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
   
      </>
  );
}

export default App;
