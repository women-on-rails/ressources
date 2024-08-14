import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function DarkModeImage(props) {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();

  return <img src={isDarkTheme ? useBaseUrl(props.imgsrcdark) : useBaseUrl(props.imgsrclight)} class={props.customclass} />;
}
