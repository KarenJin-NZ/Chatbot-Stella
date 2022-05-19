class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")){
      this.actionProvider.greet();
    }

    else if(lowerCaseMessage.includes("shipping")){
      this.actionProvider.handleShippingOptions();
    }

    else if(lowerCaseMessage.includes("rates")){
      this.actionProvider.handleShippingRates();
    }

    else if(lowerCaseMessage.includes("zones")){
      this.actionProvider.handleShippingZones();
    }

    else if(lowerCaseMessage.includes("specials")){
      this.actionProvider.handleSpecials();
    }

    else if(lowerCaseMessage.includes("thank")){
      this.actionProvider.handleEvaluationOptions();
    }

    else {
      this.actionProvider.handleErrorMessages();
    }
  }
}

export default MessageParser;