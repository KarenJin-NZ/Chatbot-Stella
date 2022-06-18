import React from 'react'
import "../Options/Options.css"

const ReturnLink = (props) => {

  const returnMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="option-button"
      >
        {link.text}
      </a>
    </li>
  ));
  return <div className="options-container">{returnMarkup}</div>;
}

export default ReturnLink