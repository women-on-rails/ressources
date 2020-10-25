import React from 'react';
import styles from '@site/src/css/timeline.module.css';

export default function TimelineStep (props){
  return (
    <div className={styles.step}>
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  );
}
