import React, {useEffect} from 'react';
import './App.css';
import Home from './pages/Home.js';
import Dashboard from './pages/Dashboard.js';
import {useStateValue as appStateValue} from './StateProvider'


function App() {
  const [{authUser}, dispatch] = appStateValue();

  useEffect(() => {
      //
  },[])

  return (
      <div className="App">
        { !authUser ?  <Home /> : <Dashboard /> }
      </div>
  );
}

export default App;
