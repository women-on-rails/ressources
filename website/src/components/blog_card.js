import React from "react";

export default function BlogCard(props) {

  return (
    <a className="card__link" href={props.link}>
      <div className="card">
        <div className="card__image">
          <img
            src={props.image}
            alt={props.imageAlt}
            title={props.imageTitle}
          />
        </div>
        <div className="card__header">
          <span className="card__date">{props.date}</span>
          <span className="card__tag">{props.tag}</span>
        </div>
        <div className="card__body">
          <h3 className="text--bold">{props.title}</h3>
          <p className="text--left text--summary">{props.summary}</p>
        </div>
        <div className="card__footer">
          <p className="card__author">par {props.author}</p>
        </div>
      </div>
    </a>
  );
}
