import React from 'react';
import { Link } from 'react';
import { Switch, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Repos from './components/Repos';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <BrowserRouter>
      <div className='Oga'>
        <Home />
      </div>
      
        <Routes>
          <Route path= "/" component={Home}  />
          <Route path= "/Repos" component={Repos} exact />
        </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
