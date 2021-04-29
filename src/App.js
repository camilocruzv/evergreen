import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './modules/login/Login';
import TablasMaestras from './modules/tablasMaestras/TablasMaestras';

import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/tablas-maestras" exact component={TablasMaestras} />
    </Router>
  );
}

export default App;
