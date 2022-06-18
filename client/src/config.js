import { createChatBotMessage } from "react-chatbot-kit";
import LinkList from "./components/LinkList/LinkList";
import Options from "./components/Options/Options";
import Shipping from "./components/Shipping/Shipping";
import Evaluation from "./components/Evaluation/Evaluation";
import MyAvatar from "./components/MyAvatar";
import ReturnLink from "./components/ReturnLink/ReturnLink";
import Specials from "./components/Specials/Specials";

const config = {
  botName:"Stella",
  initialMessages: [
    createChatBotMessage("Hi, I'm Stella the bot. How can I help you?", {
      widget:"Options",
    })
  ],

  widgets: [
    {
      widgetName:"Options",
      widgetFunc: (props) => <Options {...props} />,
    },

    //Shipping widget first layer
    {
      widgetName:"shippingOptions",
      widgetFunc: (props) => <Shipping {...props} />,
    },

    //Return widget
    {
      widgetName: "returnForm",
      widgetFunc: (props) => <ReturnLink {...props} />,
      props: {
        options: [
          {
            text: "Customer Return Form",
            url: `return`,
            id: 1,
          }
        ]
      }
    },

    //Specials widget first layer
    {
      widgetName:"specialsOptions",
      widgetFunc: (props) => <Specials {...props} />,
    },


    {
      widgetName:"specials1Links",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text:"Health & Beauty",
            url:
            "https://www.thewarehouse.co.nz/c/specials/health-beauty",
            id: 1,
          },
        ]
      }
    },

    {
      widgetName:"specials2Links",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text:"Electronics & Gaming",
            url:
            "https://www.thewarehouse.co.nz/c/specials/electronics-gaming",
            id: 1,
          },
        ]
      }
    },

    {
      widgetName:"specials3Links",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text:"Books, Music & Movies",
            url:
            "https://www.thewarehouse.co.nz/c/specials/books-music-movies",
            id: 1,
          },
        ]
      }
    },

    {
      widgetName:"specials4Links",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text:"Food, Pets & Household",
            url:
            "https://www.thewarehouse.co.nz/c/specials/food-pets-household",
            id: 1,
          }
        ]
      }
    },

    {
      widgetName:"specials5Links",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text:"Clothing, Shoes & Jewellery",
            url:
            "https://www.thewarehouse.co.nz/c/specials/clothing-shoes-jewellery",
            id: 1,
          },
        ]
      }
    },

    // Evaluation widget first layer
    {
      widgetName:"evaluationOptions",
      widgetFunc: (props) => <Evaluation {...props} />,
    },
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: "#2FA4FF",
    },
    chatButton: {
      backgroundColor: "#2FA4FF",
    },
  },

  customComponents: {
    header:() => <div style={{backgroundColor:"#2FA4FF", padding:"5px",borderRadius:"3px", fontSize:"15px", display:"flex", justifyContent:"left"}}>
      <MyAvatar /> Hi there!👋I'm Stella the Bot.</div>,
    
    botAvatar:(props) =><MyAvatar {...props} />,
  }
}

export default config;