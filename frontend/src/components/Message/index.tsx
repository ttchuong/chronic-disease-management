"use client";

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Sidebar,
  ExpansionPanel,
  Avatar,
  Search,
  ConversationList,
  Conversation,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  TypingIndicator,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";
import React, { useState, useEffect } from "react";

const zoeAvatar =
  "https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg";
const patrikAvatar =
  "https://chatscope.io/storybook/react/assets/patrik-yC7svbAR.svg";

const initialMessages = {
  Zoe: [
    {
      direction: "incoming",
      message: "Hello my friend",
      position: "single",
      sender: "Zoe",
      sentTime: "15 mins ago",
    },
    {
      direction: "outgoing",
      message: "Hi Zoe, how are you?",
      position: "single",
      sender: "Patrik",
      sentTime: "14 mins ago",
    },
    {
      direction: "incoming",
      message: "I'm doing well, thanks! How about you?",
      position: "first",
      sender: "Zoe",
      sentTime: "13 mins ago",
    },
    {
      direction: "incoming",
      message: "Any plans for the weekend?",
      position: "normal",
      sender: "Zoe",
      sentTime: "12 mins ago",
    },
    {
      direction: "incoming",
      message: "We could catch up if you're free.",
      position: "last",
      sender: "Zoe",
      sentTime: "11 mins ago",
    },
    {
      direction: "outgoing",
      message: "That sounds great! I'm free on Saturday.",
      position: "first",
      sender: "Patrik",
      sentTime: "10 mins ago",
    },
    {
      direction: "outgoing",
      message: "Let's meet at the park at 2 PM.",
      position: "last",
      sender: "Patrik",
      sentTime: "9 mins ago",
    },
  ],
  Patrik: [
    {
      direction: "incoming",
      message: "Hi Patrik, how's it going?",
      position: "single",
      sender: "Zoe",
      sentTime: "10 mins ago",
    },
    {
      direction: "outgoing",
      message: "Hey Zoe, all good here! You?",
      position: "single",
      sender: "Patrik",
      sentTime: "9 mins ago",
    },
  ],
};

function MessageComponent() {
  const [activeConversation, setActiveConversation] = useState("Zoe");
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("messages"));
    if (savedMessages) {
      setMessages(savedMessages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages({
        ...messages,
        [activeConversation]: [
          ...messages[activeConversation],
          {
            direction: "outgoing",
            message: newMessage,
            position: "single",
            sender: "Patrik",
            sentTime: "Just now",
          },
        ],
      });
      setNewMessage("");
    }
  };

  const handleConversationChange = (name) => {
    setActiveConversation(name);
  };

  return (
    <MainContainer
      responsive
      style={{
        height: "600px",
      }}
    >
      <Sidebar position="left">
        <Search placeholder="Search..." />
        <ConversationList>
          <Conversation
            active={activeConversation === "Zoe"}
            info="Yes I can do it for you"
            lastSenderName="Zoe"
            name="Zoe"
            onClick={() => handleConversationChange("Zoe")}
          >
            <Avatar name="Zoe" src={zoeAvatar} status="dnd" />
          </Conversation>
          <Conversation
            active={activeConversation === "Patrik"}
            info="How are you today"
            lastSenderName="Patrik"
            name="Patrik"
            onClick={() => handleConversationChange("Patrik")}
          >
            <Avatar name="Patrik" src={patrikAvatar} status="invisible" />
          </Conversation>
        </ConversationList>
      </Sidebar>
      <ChatContainer>
        <ConversationHeader>
          <ConversationHeader.Back />
          <Avatar
            name={activeConversation}
            src={activeConversation === "Zoe" ? zoeAvatar : patrikAvatar}
          />
          <ConversationHeader.Content
            info="Active 10 mins ago"
            userName={activeConversation}
          />
          <ConversationHeader.Actions>
            <VoiceCallButton />
            <VideoCallButton />
            <InfoButton />
          </ConversationHeader.Actions>
        </ConversationHeader>
        <MessageList
          typingIndicator={
            <TypingIndicator content={`${activeConversation} is typing`} />
          }
        >
          <MessageSeparator content="Saturday, 30 November 2019" />
          {messages[activeConversation].map((msg, index) => (
            <Message
              key={index}
              model={{
                direction: msg.direction,
                message: msg.message,
                position: msg.position,
                sender: msg.sender,
                sentTime: msg.sentTime,
              }}
            >
              {msg.direction === "incoming" && (
                <Avatar name={msg.sender} src={zoeAvatar} />
              )}
            </Message>
          ))}
        </MessageList>
        <MessageInput
          placeholder="Type message here"
          value={newMessage}
          onChange={(val) => setNewMessage(val)}
          onSend={handleSend}
        />
      </ChatContainer>
      <Sidebar position="right">
        <ExpansionPanel open title="INFO">
          <p>
            Here you can find detailed information about the chat and its
            participants.
          </p>
        </ExpansionPanel>
        <ExpansionPanel title="LOCALIZATION">
          <p>Change your location settings here.</p>
          <p>Set your preferred language and region.</p>
        </ExpansionPanel>
        <ExpansionPanel title="MEDIA">
          <p>Access all shared media files in this chat.</p>
          <p>View images, videos, and documents shared by participants.</p>
        </ExpansionPanel>
        <ExpansionPanel title="SURVEY">
          <p>Participate in surveys to improve our service.</p>
          <p>Your feedback is valuable to us.</p>
        </ExpansionPanel>
        <ExpansionPanel title="OPTIONS">
          <p>Customize your chat settings.</p>
          <p>Enable or disable notifications.</p>
          <p>Set your chat preferences.</p>
        </ExpansionPanel>
      </Sidebar>
    </MainContainer>
  );
}

export default MessageComponent;
