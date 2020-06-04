import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/home/HomePage';
import SectionsPage from './components/pages/sections/SectionsPage';


function App() {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <Route exact path='/' component={HomePage} />
        <Route path='/sections' component={SectionsPage} />
      </div>
    </HashRouter>
  );
}

export default App;
