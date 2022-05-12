import React from "react";
import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text:"Shipping",
      handler: props.actionProvider.handleShippingOptions,
      id:1,
    },
    { text: "Tracking", handler: () => {}, id: 2 },
    { text: "Returns", handler: () => {}, id: 3 },
    { text: "Specials", 
      handler: props.actionProvider.handleSpecials, 
      id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;