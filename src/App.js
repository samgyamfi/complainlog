import React, {useEffect} from 'react';
import './App.css';
import Home from './pages/Home.js';
import Dashboard from './pages/Dashboard.js';
import {useStateValue as appStateValue} from './StateProvider'


function App() {
  const [{authUser}, dispatch] = appStateValue();

  useEffect(() => {
    const storage = window.localStorage;
    let storageUser = storage.getItem('authUser');

    if(storageUser) {
      storageUser = JSON.parse(storageUser);
      dispatch({
        type: "SET_AUTHUSER",
        user: storageUser,
      })
      storage.setItem('authUser', JSON.stringify(storageUser));
    } 
  },[dispatch])

  return (
      <div className="App">
        { !authUser ?  <Home /> : <Dashboard /> }
      </div>
  );
}

export default App;
