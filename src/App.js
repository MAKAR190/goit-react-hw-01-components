import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";
import Statistics from "./components/Statistics/Statistics";
import statisticsData from "./components/Statistics/statistics-data.json";
import FriendList from "./components/FriendList/FriendList";
import friendsData from "./components/FriendList/FriendList.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHIstory";
import transactionsData from "./components/TransactionHistory/transactions.json";
function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
}

export default App;
