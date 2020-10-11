import React from "react";
import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';
function FriendListItem({avatar,isOnline,name,id}) {
    return (
        <li key={id} className={styles.item}>
            <span className={isOnline ? styles.isOnline : styles.isNotOnline}></span>
            <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}
export default FriendListItem;