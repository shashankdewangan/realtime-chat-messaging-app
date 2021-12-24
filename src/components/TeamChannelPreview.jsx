import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

const TeamChannelPreview = ({
  channel,
  setToggleContainer,
  setIsEditing,
  setIsCreating,
  setActiveChannel,
  type,
}) => {
  const { channel: activeChannel, client } = useChatContext();

  const ChannelPreview = () => (
    <p className="channel-preview__item">
      # {channel?.data?.name || channel?.data?.id}
    </p>
  );

  // converting 'data' objects in objects {{}{}} to 'data' array in objects [{}{}]
  const DirectPreview = () => {
    const members = Object.values(channel.state.members).filter(
      ({ user }) => user.id !== client.userID
    );
    return (
      <div className="channel-preview__item single">
        <Avatar
          name={members[0]?.user?.fullname}
          image={members[0]?.user?.image}
          size={24}
        />
        <p>{members[0]?.user?.fullname || members[0]?.user?.id}</p>
      </div>
    );
  };
  return (
    <div
      className={
        channel?.id === activeChannel?.id
          ? "channel-preview__warpper__selected"
          : "channel-preview__wrapper"
      }
      onClick={() => {
        setIsCreating(false);
        setIsEditing(false);
        setActiveChannel(channel);

        if(setToggleContainer){
          setToggleContainer((prevState) => !prevState )
        }
      }}
    >
      {type === "team" ? <ChannelPreview /> : <DirectPreview />}
    </div>
  );
};

export default TeamChannelPreview;
