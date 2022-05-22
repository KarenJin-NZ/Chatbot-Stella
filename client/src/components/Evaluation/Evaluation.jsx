import React from 'react'
import "../Options/Options.css"

const Evaluation = (props) => {
  const evaluationOptions = [
    {
      text:"Yes, I'm happy",
      handler: props.actionProvider.handleEvaluation,
      id: 1,
    },
    { text: "No, I'm not",
      handler: props.actionProvider.handleEvaluation,
      id: 2,
    },
  ];

  const optionsMarkup = evaluationOptions.map((option) => (
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

export default Evaluation