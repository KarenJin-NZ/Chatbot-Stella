import React from 'react'
import "../Options/Options.css"

const Shipping = (props) => {
  const shippingOptions = [
    {
      text:"Shipping Rates",
      handler: props.actionProvider.handleShippingRates , 
      id: 1,
    },
    { text: "Shipping Zones", 
    handler: props.actionProvider.handleShippingZones, 
    id: 2, 
    },
  ];

  const optionsMarkup = shippingOptions.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
}

export default Shipping