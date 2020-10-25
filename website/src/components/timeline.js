import React from 'react';
import styles from '@site/src/css/timeline.module.css';

export default function Timeline (props){
  return (
    <div className={styles.timeline}>
      {props.children}
    </div>
  );
}

