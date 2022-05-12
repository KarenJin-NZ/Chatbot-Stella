class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
 ) {
   this.createChatBotMessage = createChatBotMessage;
   this.setState = setStateFunc;
   this.createClientMessage = createClientMessage;
   this.stateRef = stateRef;
   this.createCustomMessage = createCustomMessage;
 }

 greet() {
   const greetingMessage = this.createChatBotMessage("Hi, friend.");
   this.updateChatbotState(greetingMessage);
 }

 // handleShipping
 handleShippingOptions = () => {
   const message = this.createChatBotMessage (
     "Awesome, what would you like to know?",
     {
       widget:"shippingOptions",
     }
   );

   this.updateChatbotState(message);
 }

 // handle shipping rates
 handleShippingRates = () => {
   const message = this.createChatBotMessage (
     "$5.9 for all orders within New Zealand. $6.5 for all orders in Australia."
   );

   this.updateChatbotState(message);
 }

 // handle shipping zones
 handleShippingZones = () => {
   const message = this.createChatBotMessage(
     "We ship to all locations in New Zealand, and Australia."
   );

   this.updateChatbotState(message);
 }

 // handle Specials
 handleSpecials = () => {
  const message = this.createChatBotMessage (
    "Fantastic, I have found specials in the following 5 categories. Which category would you like to know?",
  {
    widget:"specialsLinks",
  }
  );
  
  this.updateChatbotState(message);
  }

 updateChatbotState(message) {
  this.setState(prevState => ({
    ...prevState, messages: [...prevState.messages, message]
  }))
 }

}

export default ActionProvider;