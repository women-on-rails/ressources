import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useThemeContext from "@theme/hooks/useThemeContext";

export default function BlogCard(props) {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  return (
    <div className="card-demo">
      <a className="card__link" href="http://localhost:3000/ressources/blog/2020/10/04/hello-world">
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
            <h3 className=" text--bold">{props.title}</h3>
            <p className="text--left text--summary">{props.summary}</p>
          </div>
          <div className="card__footer">
          <p className="card__author">par {props.author}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
