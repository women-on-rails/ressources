import React from 'react';
import { quotecard } from '@site/src/css/quotecard.module.css';

export default function Blockquote (props){
  return (
    <blockquote className={quotecard}>
      <p>
        {props.text} 
      </p>

      <cite>
        {props.author} (<a href={props.href}>{props.handle}</a>)
      </cite>
    </blockquote>
  );
}
