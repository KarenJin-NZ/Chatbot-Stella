import axios from 'axios'

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
  //create an array of greeting messages
   const message = ["Hi, friend.", "Hey, how's it going?", "Hello, how are you?"];
   const randomGreetingMessage = message[Math.floor(Math.random() * 3)];
   const greetingMessage = this.createChatBotMessage(randomGreetingMessage);

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
   const message = this.createChatBotMessage (
     "We ship to all locations in New Zealand, and Australia."
   );

   this.updateChatbotState(message);
 }

 // handle tracking option
 handleTrackingOptions = () => {
   const message = this.createChatBotMessage (
     "Please give me your order number.",
   );
  
   this.updateChatbotState(message);
  }
  
 handleOrderNum = async (myordernumber) => {
   await axios.get('/getTrackNum?order_number='+myordernumber, 
   ).then((response) => {
     console.log(response.data.data);
     var res=response.data.msg;
     const message = this.createChatBotMessage (
       res
     );
     
     this.updateChatbotState(message);  
   });
  }

 // handle returns option
 handleReturnsOptions = () => {
  const message = this.createChatBotMessage (
    "Please click the below link to fill the return form.",
    {
      widget: "returnForm",
    }
  );
 
  this.updateChatbotState(message);
 }

 handleReturns = async (order_no) => {
  await axios.get('/getReturns?order_no='+order_no, 
  ).then((response) => {
    console.log(response.data.data);
    var res=response.data.msg;
    const message = this.createChatBotMessage (
      res
    );
    
    this.updateChatbotState(message);
  });
 }

 // handle Specials
 handleSpecialsOptions = () => {
   const message = this.createChatBotMessage (
     "Fantastic, I have found specials in the following 5 categories. Which category would you like to know?",
     {
       widget:"specialsLinks",
     }
   );
  
   this.updateChatbotState(message);
  }

 // handle Evaluation Options
 handleEvaluationOptions = () => {
   const message = this.createChatBotMessage (
     "Are you satisfied with us?",
     {
       widget:"evaluationOptions",
     }
   );
   
   this.updateChatbotState(message);
  }

 // handle Evaluation
 handleEvaluation = () => {
   const message = this.createChatBotMessage (
     "Thank you for your evaluation! If you have any questions, please feel free to contact us, we are at your service 24/7."
   );
   
   this.updateChatbotState(message);
  }

 // handle error messages
 handleErrorMessages = () => {
   const message = this.createChatBotMessage (
     "Sorry, I am not smart enough to understand your needs"
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