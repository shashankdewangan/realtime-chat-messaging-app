import React from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

const apiKey = "ukys4xahbadk";

const App = () => {
  return (
    <div className="app-wrapper">
      <Chat>
        <ChannelListContainer />
        <ChannelListContainer />
      </Chat>
    </div>
  );
};

export default App;
