import React from 'react';
import './App.css';
import Profile from './Profile/Profile';
import user from "./Profile/user.json";
function App() {
  return (
    <Profile name={user.name} tag={user.tag} avatar={user.avatar} location={user.location} stats={user.stats} />
  );
}

export default App;
