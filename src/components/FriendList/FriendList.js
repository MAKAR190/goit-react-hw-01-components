import React from "react";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
function FriendList(props) {
  return (
    <ul className={styles.friendList}>
      {props.friends.map((friend) => (
          <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id} />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
