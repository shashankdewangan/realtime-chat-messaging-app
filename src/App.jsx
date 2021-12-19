import React from "react";
import { StreamChat } from "stream-chat";
import {Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import './App.css';

import { ChannelContainer,ChannelListContainer ,Auth } from "./components";

const apiKey = "ukys4xahbadk";
const client = StreamChat.getInstance(apiKey);

const cookies = new Cookies();

// for authentication 
const authToken = cookies.get("token");

if(authToken){
  client.connectUser({
    id : cookies.get('userId'),
    name : cookies.get('userName'),
    fullName : cookies.get('fullName'),
    image : cookies.get('avatarURL'),
    hashedPassword : cookies.get('hashedPassword'),
    phoneNumber : cookies.get('phoneNumber'),
  }, authToken)
}

const App = () => {
  if(!authToken) return <Auth / >
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
