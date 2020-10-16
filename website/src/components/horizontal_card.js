import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HorizontalCard({
  src,
  alt,
  href,
  title,
  description
  }) {
  return (
    <div class="avatar mt-1">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          class="avatar__photo avatar__photo--xl"
          src={useBaseUrl(src)}
        />
      </a>
      <div class="avatar__intro ml-1">
        <h4 class="avatar__name">
          <a href={href} target="_blank" rel="noopener noreferrer">{title}</a>
        </h4>
        <small class="avatar__subtitle">
          {description}
        </small>
      </div>
    </div>
  );
}
