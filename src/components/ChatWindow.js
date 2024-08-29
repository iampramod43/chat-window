import React, { useState } from 'react';
import styled from 'styled-components';

const ChatWindowWrapper = styled.div`
  position: fixed;
  bottom: 70px;
  left: 20px;
  width: 350px;
  height: 600px;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Header = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e1e1e1;
  background-color: #f7f7f7;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #ff5a5f;
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Message = styled.div`
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 20px;
  background-color: ${({ isUser }) => (isUser ? '#e0f7fa' : '#e8e8e8')};
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  max-width: 80%;
  font-size: 14px;
  line-height: 1.4;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 15px;
  border-top: 1px solid #e1e1e1;
  background-color: #f7f7f7;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  font-size: 14px;
  background-color: #fafafa;
`;

const SendButton = styled.button`
  padding: 12px 20px;
  margin-left: 10px;
  background-color: #3b5998;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #3b4e98;
  }
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 55px;
  height: 55px;
  background-color: #3b5998;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  cursor: pointer;
  z-index: 1001;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #3b4e98;
  }
`;

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      setInputValue('');
    }
  };

  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <FloatingButton onClick={toggleChatWindow}>
        {isOpen ? '✖' : '💬'}
      </FloatingButton>
      {isOpen && (
        <ChatWindowWrapper>
          <Header>
            Activity
            <CloseButton onClick={toggleChatWindow}>✖</CloseButton>
          </Header>
          <MessagesContainer>
            {messages.map((msg, index) => (
              <Message key={index} isUser={msg.isUser}>
                {msg.text}
              </Message>
            ))}
          </MessagesContainer>
          <InputContainer>
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <SendButton onClick={handleSendMessage}>Send</SendButton>
          </InputContainer>
        </ChatWindowWrapper>
      )}
    </>
  );
};

export default ChatWindow;
