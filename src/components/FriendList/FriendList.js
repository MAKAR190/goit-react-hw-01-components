import React from "react";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
function FriendList(props) {
  return (
    <ul className={styles.friendList}>
      {props.friends.map((friend) => (
          <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
