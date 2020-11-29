import React from 'react';
import Link from '@docusaurus/Link';

export default function NewsletterCard (props){
  return (
    <div className="card">
      <div className="card__header">
        <h3>{props.title}</h3>
      </div>
      <div className="card__body">
        <p>
          {props.date}
        </p>
      </div>
      <div className="card__footer">
      <Link to={props.href} className="button button--secondary button--block">Lire en ligne</Link>
      </div>
    </div>
  );
}
