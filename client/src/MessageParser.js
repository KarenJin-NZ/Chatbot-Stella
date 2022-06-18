class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    var regPos = / ^[0-9]+.?[0-9]*/;  // determine whether it is a number

    if (!isNaN(message)){
      if(regPos.test(lowerCaseMessage)){
        this.actionProvider.handleOrderNum(lowerCaseMessage);
        console.log('is Number');
      }
      else{
        this.actionProvider.handleOrderNum(lowerCaseMessage);
        console.log('is not Number');
      }
    }

    else if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hey")){
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

    else if(lowerCaseMessage.includes("tracking")){
      this.actionProvider.handleTrackingOptions();
    }

    else if(lowerCaseMessage.includes("return")){
      this.actionProvider.handleReturnsOptions();
    }

    else if(lowerCaseMessage.includes("specials")){
      this.actionProvider.handleSpecialsOptions();
    }

    else if(lowerCaseMessage.includes("thank")){
      this.actionProvider.handleEvaluationOptions();
    }

    else{
      this.actionProvider.handleErrorMessages();
    }
  }
}

export default MessageParser;