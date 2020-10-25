import React from 'react';
import { timeline } from '@site/src/css/timeline.module.css';

export default function Timeline (props){
  return (
    <div className={ timeline }>
      { props.children }
    </div>
  );
}

