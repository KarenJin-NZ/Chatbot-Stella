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
       withAvatar: true,
     }
   );

   this.updateChatbotState(message);
 }

 // handle shipping rates
 handleShippingRates = () => {
   const message = this.createChatBotMessage (
     "$5.9 for all orders within New Zealand. $6.5 for all orders in Australia.",
     {
      withAvatar: true,
     }
   );

   this.updateChatbotState(message);
 }

 // handle shipping zones
 handleShippingZones = () => {
   const message = this.createChatBotMessage (
     "We ship to all locations in New Zealand, and Australia.",
     {
      withAvatar: true,
     }
   );

   this.updateChatbotState(message);
 }

 // handle tracking option
 handleTrackingOptions = () => {
   const message = this.createChatBotMessage (
     "Please give me your order number.",
     {
      withAvatar: true,
     }
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
      withAvatar: true,
    }
  );
 
  this.updateChatbotState(message);
 }

 // handle Specials
 handleSpecialsOptions = () => {
   const message = this.createChatBotMessage (
     "Fantastic, There are 5 specials on sale today. Which category would you like to know?",
     {
       widget:"specialsOptions",
       withAvatar: true,
     }
   );
  
   this.updateChatbotState(message);
  }

  handleSpecials1 = () => {
    const message = this.createChatBotMessage (
      "I have found specials on Health and Beauty for you, Please click the link below to view.",
      {
        widget:"specials1Links",
        withAvatar: true,
      }
    );
   
    this.updateChatbotState(message);
   }

   handleSpecials2 = () => {
    const message = this.createChatBotMessage (
      "I have found specials on Electronics and Gaming for you, Please click the link below to view.",
      {
        widget:"specials2Links",
        withAvatar: true,
      }
    );
   
    this.updateChatbotState(message);
   }

   handleSpecials3 = () => {
    const message = this.createChatBotMessage (
      "I have found specials on Books, Music and Movies for you, Please click the link below to view.",
      {
        widget:"specials3Links",
        withAvatar: true,
      }
    );
   
    this.updateChatbotState(message);
   }

   handleSpecials4 = () => {
    const message = this.createChatBotMessage (
      "I have found specials on Food, Pets and Household for you, Please click the link below to view.",
      {
        widget:"specials4Links",
        withAvatar: true,
      }
    );
   
    this.updateChatbotState(message);
   }

   handleSpecials5 = () => {
    const message = this.createChatBotMessage (
      "I have found specials on Clothing, Shoes and Jewellery for you, Please click the link below to view.",
      {
        widget:"specials5Links",
        withAvatar: true,
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
       withAvatar: true,
     }
   );
   
   this.updateChatbotState(message);
  }

 // handle Evaluation
 handleEvaluation = () => {
   const message = this.createChatBotMessage (
     "Thank you for your evaluation! If you have any questions, please feel free to contact us, we are at your service 24/7.",
     {
      withAvatar: true,
     }
   );
   
   this.updateChatbotState(message);
  }

 // handle error messages
 handleErrorMessages = () => {
   const message = this.createChatBotMessage (
     "Sorry, I am not smart enough to understand your needs",
     {
      withAvatar: true,
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