import React from 'react'
import "../Options/Options.css"

const Specials = (props) => {
  const specialsOptions = [
    {
      text:"Health & Beauty",
      handler: props.actionProvider.handleSpecials1, 
      id: 1,
    },
    { text: "Electronics & Gaming",
      handler: props.actionProvider.handleSpecials2, 
      id: 2,
    },
    { text: "Books, Music & Movies",
      handler: props.actionProvider.handleSpecials3, 
      id: 3,
    },
    { text: "Food, Pets & Household",
      handler: props.actionProvider.handleSpecials4, 
      id: 4,
    },
    { text: "Clothing, Shoes & Jewellery",
      handler: props.actionProvider.handleSpecials5, 
      id: 5,
    },
  ];

  const optionsMarkup = specialsOptions.map((option) => (
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

export default Specials;