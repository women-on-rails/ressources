import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Avatar({
  src,
  alt,
  href,
  title
  }) {
  return (
    <div class="avatar">
      <a
        class="avatar__photo-link avatar__photo avatar__photo--lg"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt={alt}
          src={useBaseUrl(src)}
        />
      </a>
      <div class="avatar__intro">
        <a
          href={useBaseUrl(src)}
        >
          <h4 class="avatar__name">{title}</h4>
        </a>
      </div>
    </div>  
  );
}
