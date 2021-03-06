import React from "react";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";
function Profile(props) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={props.avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.tag}>{props.tag}</p>
        <p className={styles.tag}>{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}> {props.stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}> {props.stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}> {props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
export default Profile;
