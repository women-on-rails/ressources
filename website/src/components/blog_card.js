import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useThemeContext from "@theme/hooks/useThemeContext";

export default function BlogCard(props) {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();

  let style = "";
  isDarkTheme ? (style = "--dark-mode") : (style = "");

  return (
    <a className="card__link" href={props.link}>
      <div className={`card card${style}`}>
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
          <h3 className={`text--bold text${style}`}>{props.title}</h3>
          <p className={`text--left text--summary text${style}`}>
            {props.summary}
          </p>
        </div>
        <div className="card__footer">
          <p className="card__author">par {props.author}</p>
        </div>
      </div>
    </a>
  );
}
