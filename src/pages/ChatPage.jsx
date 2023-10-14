import React from 'react'
import "react-chatbot-kit/build/main.css";
import ActionProvider from "../chatbot/ActionProvider";
import config from "../chatbot/config";
import MessageParser from "../chatbot/Messageparser";
import Chatbot from 'react-chatbot-kit';

const ChatPage = () => {
  return (
    <>
        <div className='flex justify-center p-5'>
            <Chatbot 
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />   
        </div>
    </>
  )
}

export default ChatPage;