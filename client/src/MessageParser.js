class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    if(lowerCaseMessage.includes("shipping")){
      this.actionProvider.handleShippingOptions();
    }

    if(lowerCaseMessage.includes("rates")){
      this.actionProvider.handleShippingRates();
    }

    if(lowerCaseMessage.includes("zones")){
      this.actionProvider.handleShippingZones();
    }

    if(lowerCaseMessage.includes("specials")){
      this.actionProvider.handleSpecials();
    }

  }
}

export default MessageParser;