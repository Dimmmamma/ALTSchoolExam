import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import './style.css';
import Repos from './components/Repos';
import PageNotFound from './components/PageNotFound';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <ErrorBoundary>
    <BrowserRouter>
      {/* <div className='Oga'>
        <Home />
      </div> */}
      
        <Routes>
        <Route path= "/" element={<Home />}  />
        <Route path= "/Repos" element={<Repos />} exact />
          <Route path= "*" element={<PageNotFound />}  />
          {/* <Route path= "/Repos" element={ Repos } exact /> */}
          {/* <Redirect to="/" /> */}
        </Routes>
      
    </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
