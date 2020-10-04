import React from "react";
import styles from './FriendListItem.module.css';
function FriendListItem({friend}) {
    return (
        <li key={friend.id} className={styles.item}>
            <span className={friend.isOnline ? styles.isOnline : styles.isNotOnline}></span>
            <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
            <p className={styles.name}>{friend.name}</p>
        </li>
    )
}
export default FriendListItem;