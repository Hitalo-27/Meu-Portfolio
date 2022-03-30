import React from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import '../src/global/global.css'
import Index from './pages/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Index} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
