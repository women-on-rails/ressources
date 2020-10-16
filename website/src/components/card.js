import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Card({
  src,
  alt,
  href,
  title,
  description
  }) {
  return (
    <div class="card h-100">
      <div class="card__image">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img
            src={useBaseUrl(src)}
            alt={alt}
            class="center mt-2"
            height="100"
          />
        </a>
      </div>
      <div class="card__body">
        <h4>
          <a href={href} target="_blank" rel="noopener noreferrer">{title}</a>
        </h4>
        <small>
          {description}
        </small>
      </div>
    </div>
  );
}
