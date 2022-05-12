import { createChatBotMessage } from "react-chatbot-kit";
import LinkList from "./components/LinkList/LinkList";
import Options from "./components/Options/Options";
import Shipping from "./components/Shipping/Shipping";
import MyAvatar from "./components/MyAvatar";

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

    //Specials widget
    {
      widgetName:"specialsLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text:"Books, Music & Movies",
            url:
            "https://www.thewarehouse.co.nz/c/specials/books-music-movies",
            id: 1,
          },
          {
            text:"Clothing, Shoes & Jewellery",
            url:
            "https://www.thewarehouse.co.nz/c/specials/clothing-shoes-jewellery",
            id: 2,
          },
          {
            text:"Electronics & Gaming",
            url:
            "https://www.thewarehouse.co.nz/c/specials/electronics-gaming",
            id: 3,
          },
          {
            text:"Health & Beauty",
            url:
            "https://www.thewarehouse.co.nz/c/specials/health-beauty",
            id: 4,
          },
          {
            text:"Food, Pets & Household",
            url:
            "https://www.thewarehouse.co.nz/c/specials/food-pets-household",
            id: 5,
          }
        ]
      }
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
      Hi there!👋I'm Stella the Bot.</div>,
    

    botAvatar:(props) =><MyAvatar {...props} />,
    
  }
}

export default config;