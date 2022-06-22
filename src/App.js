import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
import RevPage from './pages/RevPage';
import ContactUs from './pages/ContactUs.jsx';

function App() {
 
  return (
    <div className='App'>
     <BrowserRouter>
    

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/reviews' element={<RevPage/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>

     </BrowserRouter>
  
    </div>
  );
}

export default App;
