import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function MeetingCard({
  src,
  alt,
  title,
  href,
  description,
  frequency
  }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div class="card" style={{ border: 'none' }}>
      <div class="container">

        <div class = "row">
          <div class="col col--3">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img
                class="avatar__photo avatar__photo--xl"
                src={useBaseUrl(src)}
                alt={alt}
              />
            </a>
          </div>
          <div class="col col--9">
            <div class="card__header">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
              </a>
              <a class="button button--primary" href={href}>
                {frequency}
              </a>
            </div>
          </div>
        </div>

        <div class = "row">
          <div class="card__body">
            <p>{description}</p>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
