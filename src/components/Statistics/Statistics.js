import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";
function Statistics(props) {
  return (
    <section className={styles.statistics}>
      {props.title && <h2 className={styles.title}>{props.title}</h2>}
      <ul className={styles.list}>
        {props.stats.map((obj) => (
          <li key={obj.id}>
            <span>{obj.label}</span>
            <span className={styles.num}>{obj.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
Statistics.defaultProps = {
  title: ''
}
export default Statistics;
