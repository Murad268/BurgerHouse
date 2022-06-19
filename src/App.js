import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className='App'>
     <BrowserRouter>
     <HomePage/>

      <Routes>
    
      </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
