import React from 'react';
import Avatar from './Avatar.jsx';
import './userInfo.scss';

const UserInfo = (props) => {
  return (
    <div className="user-info">
        <Avatar 
          avatarUrl={props.name.avatarUrl}
          name={props.name.name} />
        <div className="user-info__name">{props.name.name}</div>
      </div>
  );
};

export default UserInfo;