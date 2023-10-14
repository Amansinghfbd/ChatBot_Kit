import React from "react";

const MessageParser = ({ children, actions }) => {
    
  const parse = (message) => {
    if (message.toLowerCase().includes('got it')) {
      actions.handleEnterName()
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse,
          actions
        });
      })}
    </div>
  );
};

export default MessageParser;
