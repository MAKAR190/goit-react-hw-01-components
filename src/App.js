import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import Statistics from "./Statistics/Statistics";
import statisticsData from "./Statistics/statistics-data.json";
function App() {
  return (
    <div className="app">
      <Profile
        name={user.name}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
    </div>
  );
}

export default App;
